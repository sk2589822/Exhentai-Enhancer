import { GM } from 'vite-plugin-monkey/dist/client'
import { reactive } from 'vue'

export const enum GMKey {
  InfiniteScroll = 'InfiniteScroll',
  ScrollByRow = 'ScrollByRow',
  ArchiveButton = 'archiveButton',
  Highlight = 'Highlight',
  ShowHiddenGalleries = 'ShowHiddenGalleries',

  BetterPopup = 'BetterPopup',
  QuickArchiveDownloadMethod = 'QuickDownloadMethod',
  ArchiveSessionAction = 'ArchiveSessionAction',
  QuickTorrentDownload = 'QuickTorrentDownload',
  LoadAllGalleryImages = 'LoadAllGalleryImages',

  MultipageViewerEnhancer = 'MultipageViewerEnhancer',
  AutoRedirect = 'AutoRedirect',
  PreventImageRemoval = 'PreventImageRemoval',
  ChangePageByWheelAnyWhereSwitch = 'ChangePageByWheelAnyWhere',

  Magnifier = 'Magnifier',
  MagnifierActivationButton = 'MagnifierActivationButton',
  MagnifierToggleMode = 'MagnifierToggleMode',
  MagnifierDefaultScale = 'MagnifierDefaultScale',
  MagnifierScaleStep = 'MagnifierScaleStep',
  MagnifierLongPressThreshold = 'MagnifierLongPressThreshold',
  MagnifierSensitivityX = 'MagnifierSensitivityX',
  MagnifierSensitivityY = 'MagnifierSensitivityY',

  ShowJapaneseTitle = 'ShowJapaneseTitle',
}

export const enum ArchiveDownloadMethod {
  Manual = 'Manual',
  HaH_Original = 'download Original Resolution with H@H',
  HaH_2400 = 'download 2400x Resolution with H@H',
  Direct_Origin = 'download Original Resolution directly',
  Direct_Resample = 'download Resample Resolution directly',
}

/**
 * 已經存在未失效的 archive session 時，點擊 Archive Download 的行為
 *
 * 值刻意使用與顯示文字無關的短 key，這樣之後改文案不會動到已儲存的設定
 */
export const enum ArchiveSessionAction {
  DownloadDirectly = 'DownloadDirectly',
  OpenPopup = 'OpenPopup',
  CancelThenDownload = 'CancelThenDownload',
  ShowCancelButton = 'ShowCancelButton',
}

export const enum MouseButton {
  Left = 'left',
  Right = 'right',
}


class GMVariable<T extends boolean | ArchiveDownloadMethod | ArchiveSessionAction | MouseButton | number> {
  private _key: string
  private _value: T
  private _legacyValues: Record<string, T>

  /**
   * @param legacyValues 舊版存進去、現在已經不合法的值，對應到現行的值
   */
  constructor(key: string, defaultValue: T, legacyValues: Record<string, T> = {}) {
    this._key = key
    this._value = defaultValue
    this._legacyValues = legacyValues
  }

  get value(): T {
    return this._value
  }

  set value(value: T) {
    this._value = value
    GM.setValue(this._key, this._value)
  }

  async initialize() {
    const stored = await GM.getValue(this._key, this._value)

    const migrated = this._legacyValues[String(stored)]
    if (migrated === undefined) {
      this._value = stored
      return
    }

    // 用 setter 寫回新值，所以遷移只會發生一次
    this.value = migrated
  }
}

// Galleries enhancer
export const infiniteScrollSwitch = reactive(new GMVariable<boolean>(GMKey.InfiniteScroll, true))
export const archiveButtonSwitch = reactive(new GMVariable<boolean>(GMKey.ArchiveButton, true))
export const highlightSwitch = reactive(new GMVariable<boolean>(GMKey.Highlight, true))
export const showHiddenGalleriesSwitch = reactive(new GMVariable<boolean>(GMKey.ShowHiddenGalleries, false))

// Gallery enhancer
export const scrollByRowSwitch = reactive(new GMVariable<boolean>(GMKey.ScrollByRow, true))
export const betterPopupSwitch = reactive(new GMVariable<boolean>(GMKey.BetterPopup, true))
export const quickArchiveDownloadMethod = reactive(new GMVariable<ArchiveDownloadMethod>(GMKey.QuickArchiveDownloadMethod, ArchiveDownloadMethod.Manual))
export const archiveSessionAction = reactive(new GMVariable<ArchiveSessionAction>(GMKey.ArchiveSessionAction, ArchiveSessionAction.DownloadDirectly))
export const quickTorrentDownloadSwitch = reactive(new GMVariable<boolean>(GMKey.QuickTorrentDownload, false))
export const loadAllGalleryImagesSwitch = reactive(new GMVariable<boolean>(GMKey.LoadAllGalleryImages, true))

// Multi-Page Viewer enhancer
export const multipageViewerEnhancerSwitch = reactive(new GMVariable<boolean>(GMKey.MultipageViewerEnhancer, true))
export const autoRedirectSwitch = reactive(new GMVariable<boolean>(GMKey.AutoRedirect, false))
export const preventImageRemovalSwitch = reactive(new GMVariable<boolean>(GMKey.PreventImageRemoval, false))
export const changePageByWheelAnyWhereSwitch = reactive(new GMVariable<boolean>(GMKey.ChangePageByWheelAnyWhereSwitch, false))

// Magnifier
export const magnifierSwitch = reactive(new GMVariable<boolean>(GMKey.Magnifier, true))
export const magnifierActivationButton = reactive(new GMVariable<MouseButton>(GMKey.MagnifierActivationButton, MouseButton.Left))
export const magnifierToggleMode = reactive(new GMVariable<boolean>(GMKey.MagnifierToggleMode, true))
export const magnifierDefaultScale = reactive(new GMVariable<number>(GMKey.MagnifierDefaultScale, 1.5))
export const magnifierScaleStep = reactive(new GMVariable<number>(GMKey.MagnifierScaleStep, 0.1))
export const magnifierLongPressThreshold = reactive(new GMVariable<number>(GMKey.MagnifierLongPressThreshold, 200))
export const magnifierSensitivityX = reactive(new GMVariable<number>(GMKey.MagnifierSensitivityX, 2))
export const magnifierSensitivityY = reactive(new GMVariable<number>(GMKey.MagnifierSensitivityY, 2))

// Common
export const showJapaneseTitle = reactive(new GMVariable<boolean>(GMKey.ShowJapaneseTitle, true))

export async function initializeMonkeySwitches() {
  await Promise.all([
    infiniteScrollSwitch.initialize(),
    archiveButtonSwitch.initialize(),
    highlightSwitch.initialize(),
    showHiddenGalleriesSwitch.initialize(),

    scrollByRowSwitch.initialize(),
    betterPopupSwitch.initialize(),
    quickArchiveDownloadMethod.initialize(),
    archiveSessionAction.initialize(),
    quickTorrentDownloadSwitch.initialize(),
    loadAllGalleryImagesSwitch.initialize(),

    multipageViewerEnhancerSwitch.initialize(),
    autoRedirectSwitch.initialize(),
    preventImageRemovalSwitch.initialize(),
    changePageByWheelAnyWhereSwitch.initialize(),

    magnifierSwitch.initialize(),
    magnifierActivationButton.initialize(),
    magnifierToggleMode.initialize(),
    magnifierDefaultScale.initialize(),
    magnifierScaleStep.initialize(),
    magnifierLongPressThreshold.initialize(),
    magnifierSensitivityX.initialize(),
    magnifierSensitivityY.initialize(),

    showJapaneseTitle.initialize(),
  ])
}
