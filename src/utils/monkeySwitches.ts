import { GM } from 'vite-plugin-monkey/dist/client'

class Switch {
  private _name: string
  private _enabled: boolean

  constructor(name: string) {
    this._name = name
    this._enabled = true
  }

  get enabled(): boolean {
    return this._enabled
  }

  async initialize() {
    this._enabled = await GM.getValue(this._name, true)
    GM.registerMenuCommand(this.getTitle(), () => this.toggle())
  }

  private getTitle() {
    const checkBoxIcon = this._enabled
      ? '☑'
      : '☐'

    return `${checkBoxIcon} ${this._name}`
  }

  private async toggle() {
    await GM.setValue(this._name, !this._enabled)
    location.reload()
  }
}

// Front page enhancer
export const infiniteScrollSwitch = new Switch('Enable infinite Scroll in Front page')

// Gallery enhancer
export const scrollPerRowSwitch = new Switch('Enable scroll per row')
export const betterDownloadPopupSwitch = new Switch('Enable better download popup')
export const loadAllGalleryImagesSwitch = new Switch('Load all images in gallery page')

// Multi-Page Viewer enhancer
export const multipageViewerEnhancerSwitch = new Switch('Enable Multi-Page Viewer enhancer')
export const autoRedirectSwitch = new Switch('Enable auto redirect to Multi-Page Viewer')

export async function initializeMonkeySwitches() {
  await Promise.all([
    infiniteScrollSwitch.initialize(),
    scrollPerRowSwitch.initialize(),
    betterDownloadPopupSwitch.initialize(),
    loadAllGalleryImagesSwitch.initialize(),
    multipageViewerEnhancerSwitch.initialize(),
    autoRedirectSwitch.initialize(),
  ])
}
