import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { initializeMonkeySwitches } from '@/utils/GMVariables'
import App from '@/App.vue'

const app = createApp(App)

app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 2,
  newestOnTop: true,
  pauseOnFocusLoss: true,
  hideProgressBar: true,
  closeButton: false,
});

(async () => {
  await initializeMonkeySwitches()
  app.mount(
    (() => {
      const app = document.createElement('div') as HTMLElement
      app.classList.add('enhancer-container')
      app.style.backgroundColor = 'inherit'
      document.body.append(app)
      return app
    })(),
  )
})()

