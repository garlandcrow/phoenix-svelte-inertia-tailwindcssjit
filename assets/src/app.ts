import '../css/app.css'
import { InertiaApp } from '@inertiajs/inertia-svelte'

const pages = import.meta.glob('./pages/**/*.svelte')

const app = document.getElementById('app')

new InertiaApp({
  target: app,
  props: {
    initialPage: JSON.parse(app.dataset.page),
    resolveComponent: async (name) => {
      const page = pages[`./pages/${name}.svelte`]

      if (!page) {
        throw new Error(`Page ${name} not found.`)
      }

      return await page()
    },
  },
})
