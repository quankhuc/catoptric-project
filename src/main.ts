import { ViteSSG } from 'vite-ssg'
import Previewer from 'virtual:vue-component-preview'
import VueDragSelect from '@coleqiu/vue-drag-select'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import App from './App.vue'
import type { UserModule } from './types'
import { routes } from './router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// // https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
    ctx.app.use(VueDragSelect)
    ctx.app.use(createVuestic())
  },
)

// import { createApp } from 'vue'
// import { createVuestic } from 'vuestic-ui'
// import VueDragSelect from '@coleqiu/vue-drag-select'
// import store from './store'
// import router from './router'
// import App from './App.vue'

// import '@unocss/reset/tailwind.css'
// import './styles/main.css'
// import 'uno.css'

// const app = createApp(App)

// app.use(store)
// app.use(router)
// app.use(createVuestic())
// app.use(VueDragSelect)

// app.mount('#app')
