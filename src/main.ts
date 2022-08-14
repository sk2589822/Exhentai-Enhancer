import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from '@/App.vue'

const app = createApp(App)

app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 2,
  newestOnTop: true,
  pauseOnFocusLoss: true,
  hideProgressBar: true,
  closeButton: false,
})

app.mount(
  (() => {
    const app = document.createElement('div') as HTMLElement
    app.style.display = 'none'
    document.body.append(app)
    return app
  })(),
)
