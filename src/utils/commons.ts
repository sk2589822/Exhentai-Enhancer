export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function getElement(selector: string, root: Document | HTMLElement = document): HTMLElement | null {
  return root.querySelector(selector)
}

export function getElements(selector: string, root = document): NodeListOf<HTMLElement> | null {
  return root.querySelectorAll(selector)
}

export async function getDoc(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  const html = await response.text()
  return new DOMParser().parseFromString(html, 'text/html')
}

export function createLogger(feature: string) {
  return (message: string, error: string) => {
    const icon = [`%c ${feature} `, 'background: #777; border-radius: 5px']

    if (error) {
      console.error(...icon, message, error)
    } else {
      console.log(...icon, message)
    }
  }
}
