// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Counter from './components/Counter.vue'
import HeroBefore from './components/HeroBefore.vue'


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-before': () => h(HeroBefore),
      'aside-top': () => h(HeroBefore),
      'doc-footer-before': () => h(HeroBefore),
      'doc-before': () => h(HeroBefore),
      'doc-after': () => h(HeroBefore),
      'doc-bottom': () => h(HeroBefore),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Counter', Counter)
  }
}
