export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function getElement<T extends HTMLElement>(selector: string, root: Document | HTMLElement = document): T | null {
  return root.querySelector(selector)
}

export function getElements<T extends HTMLElement>(selector: string, root: Document | HTMLElement = document): NodeListOf<T> | null {
  return root.querySelectorAll(selector)
}

export async function getDoc(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  const html = await response.text()
  return new DOMParser().parseFromString(html, 'text/html')
}

export function scrollElement(element: HTMLElement, { offset, absolute }: {offset?: number, absolute?: number}) {
  if (offset) {
    element.scrollTop += offset
    return
  }

  if (absolute) {
    element.scrollTop = absolute
  }
}
