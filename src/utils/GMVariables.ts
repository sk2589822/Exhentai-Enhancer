import { GM } from 'vite-plugin-monkey/dist/client'
import { reactive } from 'vue'

import { GMKey, DownloadMethod } from '@/constants/monkey'

class GMVariable<T extends boolean | DownloadMethod> {
  private _key: string
  private _value: T

  constructor(key: string, defaultValue: T) {
    this._key = key
    this._value = defaultValue
  }

  get value(): T {
    return this._value
  }

  set value(value: T) {
    this._value = value
    GM.setValue(this._key, this._value)
  }

  async initialize() {
    this._value = await GM.getValue(this._key, this._value)
  }
}

// Front page enhancer
export const infiniteScrollSwitch = reactive(new GMVariable<boolean>(GMKey.InfiniteScroll, true))
export const archiveButtonSwitch = reactive(new GMVariable<boolean>(GMKey.ArchiveButton, true))
export const highlightSwitch = reactive(new GMVariable<boolean>(GMKey.Highlight, true))

// Gallery enhancer
export const scrollByRowSwitch = reactive(new GMVariable<boolean>(GMKey.ScrollByRow, true))
export const betterPopupSwitch = reactive(new GMVariable<boolean>(GMKey.BetterPopup, true))
export const quickDownloadMethod = reactive(new GMVariable<DownloadMethod>(GMKey.QuickDownloadMethod, DownloadMethod.Manual))
export const loadAllGalleryImagesSwitch = reactive(new GMVariable<boolean>(GMKey.LoadAllGalleryImages, true))

// Multi-Page Viewer enhancer
export const multipageViewerEnhancerSwitch = reactive(new GMVariable<boolean>(GMKey.MultipageViewerEnhancer, true))
export const autoRedirectSwitch = reactive(new GMVariable<boolean>(GMKey.AutoRedirect, false))
export const preventImageRemovalSwitch = reactive(new GMVariable<boolean>(GMKey.PreventImageRemoval, false))
export const magnifierSwitch = reactive(new GMVariable<boolean>(GMKey.Magnifier, true))


// Common
export const showJapaneseTitle = reactive(new GMVariable<boolean>(GMKey.ShowJapaneseTitle, true))

export async function initializeMonkeySwitches() {
  await Promise.all([
    infiniteScrollSwitch.initialize(),
    archiveButtonSwitch.initialize(),
    highlightSwitch.initialize(),

    scrollByRowSwitch.initialize(),
    betterPopupSwitch.initialize(),
    quickDownloadMethod.initialize(),
    loadAllGalleryImagesSwitch.initialize(),

    multipageViewerEnhancerSwitch.initialize(),
    preventImageRemovalSwitch.initialize(),
    autoRedirectSwitch.initialize(),
    magnifierSwitch.initialize(),

    showJapaneseTitle.initialize(),
  ])
}
