// this file is NOT used in the webpack pipe line it is only used for parsing by the vscode-svelte
// or other IDE plugins. The versions in package.json cannot import and use correctly the postcss.config
// which IS used in wepack due to tailwind/postcss version requirements not being compatible. this
// file uses require(tailwind/plugin) whereas that is not compatible with postcss.config that webpack
// expects. so this deviates from that config in order to get linting in vscode and webpack.

const sveltePreprocess = require('svelte-preprocess')

const createPreprocessors = ({ sourceMap }) => [
  sveltePreprocess({
    sourceMap,
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss: true,
  }),
  // You could have more preprocessors, like mdsvex
]

module.exports = {
  createPreprocessors,
  // Options for `svelte-check` and the VS Code extension
  preprocess: createPreprocessors({ sourceMap: true }),
}
