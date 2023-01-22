import { GM } from 'vite-plugin-monkey/dist/client'
import { reactive } from 'vue'

import { GMKey, DownloadMethod } from '@/constants/monkey'

class GMVariable {
  private _key: string
  private _oldKey: string
  private _value: any

  constructor(key: string, defaultValue: any, oldKey?: string) {
    this._key = key
    this._oldKey = oldKey || ''
    this._value = defaultValue
  }

  get value(): any {
    return this._value
  }

  set value(value: any) {
    this._value = value
    GM.setValue(this._key, this._value)
  }

  async initialize() {
    // TODO: 之後移掉這段
    const oldValue = await GM.getValue(this._oldKey, null)
    if (oldValue !== null) {
      this._value = await GM.getValue(this._key, oldValue)
      return
    }

    this._value = await GM.getValue(this._key, this._value)
  }
}

// Front page enhancer
export const infiniteScrollSwitch = reactive(new GMVariable(GMKey.InfiniteScroll, true, 'Enable infinite scroll in front page'))

// Gallery enhancer
export const scrollByRowSwitch = reactive(new GMVariable(GMKey.ScrollByRow, true, 'Enable scroll per row'))
export const betterDownloadPopupSwitch = reactive(new GMVariable(GMKey.BetterDownloadPopup, true, 'Enable better download popup'))
export const quickDownloadMethod = reactive(new GMVariable(GMKey.QuickDownloadMethod, DownloadMethod.Manual))
export const loadAllGalleryImagesSwitch = reactive(new GMVariable(GMKey.LoadAllGalleryImages, true, 'Load all images in gallery page'))

// Multi-Page Viewer enhancer
export const multipageViewerEnhancerSwitch = reactive(new GMVariable(GMKey.MultipageViewerEnhancer, true, 'Enable Multi-Page Viewer enhancer'))
export const autoRedirectSwitch = reactive(new GMVariable(GMKey.AutoRedirect, true, 'Enable auto redirect to Multi-Page Viewer'))

export async function initializeMonkeySwitches() {
  await Promise.all([
    infiniteScrollSwitch.initialize(),
    scrollByRowSwitch.initialize(),
    betterDownloadPopupSwitch.initialize(),
    quickDownloadMethod.initialize(),
    loadAllGalleryImagesSwitch.initialize(),
    multipageViewerEnhancerSwitch.initialize(),
    autoRedirectSwitch.initialize(),
  ])
}