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

export const autoRedirectSwitch = new Switch('Enable auto redirect to Multi-Page Viewer')
export const scrollPerRowSwitch = new Switch('Enable scroll per row')
export const betterDownloadPopupSwitch = new Switch('Enable better download Popup')
export const multipageViewerEnhancerSwitch = new Switch('Enable enhance Multi-Page Viewer')

export async function initializeMonkeySwitches() {
  autoRedirectSwitch.initialize()
  scrollPerRowSwitch.initialize()
  betterDownloadPopupSwitch.initialize()
  multipageViewerEnhancerSwitch.initialize()
}
