export class Logger {
  private readonly _feature: string
  private readonly _featureStyle: string
  private _scope: string | null
  private readonly _scopeStyle: string

  constructor(feature: string) {
    this._feature = feature
    this._scope = null
    this._featureStyle = 'background: #777; border-radius: 5px;'
    this._scopeStyle = 'background: #555; border-radius: 5px;'
  }

  set scope(scope: string) {
    this._scope = scope
  }

  get prefix() {
    let prefix = `%c ${this._feature} `

    if (this._scope) {
      prefix += `%c ${this._scope} `
    }

    return prefix
  }

  get style() {
    const style = [this._featureStyle]

    if (this._scope) {
      style.push(this._scopeStyle)
    }

    return style
  }

  log(message: string | HTMLElement | null) {
    console.log(
      this.prefix,
      ...this.style,
      message,
    )
  }

  error(message: string, error?: Error) {
    console.error(
      this.prefix,
      ...this.style,
      message,
      error,
    )
  }
}

export class LoggerScopeDecorator {
  private readonly _logger: Logger

  constructor(baseLogger: Logger, scope: string) {
    this._logger = baseLogger
    this._logger.scope = scope
  }

  log(message: string | HTMLElement | null) {
    this._logger.log(message)
  }

  error(message: string, error?: Error) {
    this._logger.error(message, error)
  }
}
