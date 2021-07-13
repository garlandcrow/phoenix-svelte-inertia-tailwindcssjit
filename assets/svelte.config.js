import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess for more information
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss: true,
  }),
}
