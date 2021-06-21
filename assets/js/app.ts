// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import '../css/app.css'

import 'phoenix_html'
import 'svelte'

import { createInertiaApp } from '@inertiajs/inertia-svelte'

import axios from 'axios'
// import Layout from '@/pages/_layout.svelte'

// per instructions https://github.com/devato/inertia_phoenix
axios.defaults.xsrfHeaderName = 'x-csrf-token'

createInertiaApp({
  resolve: (name) => require(`./pages/${name}.svelte`),
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})

// const app = document.getElementById('app')

// if (app) {
//   new InertiaApp({
//     target: app,
//     props: {
//       initialPage: JSON.parse(app.dataset.page),
//       resolveComponent: async (name) => {
//         let page = await import(`./pages/${name}.svelte`)
//         // page.layout = page.layout === undefined ? Layout : page.layout
//         return page
//       },
//     },
//   })
// }
