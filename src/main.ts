import { createApp } from 'vue'

import App from '@/App.vue'

createApp(App).mount(
  (() => {
    const app = document.createElement('div') as HTMLElement
    app.style.display = 'none'
    document.body.append(app)
    return app
  })(),
)
