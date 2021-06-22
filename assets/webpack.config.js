const path = require('path')
const webpack = require('webpack')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  const devMode = options.mode !== 'production'

  return {
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: devMode,
          terserOptions: {
            extractComments: true,
            compress: {
              drop_console: true,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        }),
      ],
    },
    entry: {
      app: './js/app.ts',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../priv/static/js'),
      publicPath: '/js/',
    },
    // devtool: devMode ? 'source-map' : undefined,
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev: devMode,
              emitCss: !devMode,
              hotReload: devMode,
              hotOptions: {
                noPreserveState: false,
                noPreserveStateKey: '@!hmr',
                noReload: false,
                // Try to recover after runtime errors in component init
                optimistic: false,
              },
              preprocess: require('svelte-preprocess')({
                defaults: {
                  script: 'typescript',
                },
                postcss: true,
              }),
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /svelte\.\d+\.css/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/,
          include: /svelte\.\d+\.css/,
          use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.mjs', '.js', '.svelte', '.json', '.css'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
      alias: {
        '@': path.resolve(__dirname, 'js'),
        svelte: path.resolve('node_modules', 'svelte'),
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({ filename: '../css/app.css' }),
      new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
      new HardSourceWebpackPlugin(),
    ],
  }
}
