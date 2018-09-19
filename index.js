const path = require('path')
const fs = require('fs')

const pngStringify = require('console-png')

const pluginName = 'WarningImageWebpackPlugin'

class WarningImageWebpackPlugin {
  constructor(options) {
    const defaultOptions = {
      doneImage: path.resolve(__dirname, 'done.png'),
      failImage: path.resolve(__dirname, 'fail.png'),
      doneMessage: ['', '', '', '', '', '', '', ''],
      failMessage: ['', '', '', '', '', '', '', ''],
    }

    this._options = options || {}
    this._options.doneImage = this._options.doneImage || defaultOptions.doneImage
    this._options.failImage = this._options.failImage || defaultOptions.failImage
    this._options.doneMessage = this._options.doneMessage || defaultOptions.doneMessage
    this._options.failMessage = this._options.failMessage || defaultOptions.failMessage
  }

  apply(compiler) {
    compiler.hooks.done.tap(pluginName, stats => {
      const warnings = stats.compilation.warnings.length
      const errors = stats.compilation.errors.length
      let image
      let message
      if (warnings > 0 || errors > 0) {
        image = fs.readFileSync(this._options.failImage)
        message = this._options.failMessage
      } else {
        image = fs.readFileSync(this._options.doneImage)
        message = this._options.doneMessage
      }

      pngStringify(image, (err, string) => {
        console.log(this._mergeString(string, message))
      })
    })
  }

  _mergeString(imageString, message) {
    let list = imageString.split('\n')
    list[0] += ' ' + message[0]
    list[1] += ' ' + message[1]
    list[2] += ' ' + message[2]
    list[3] += ' ' + message[3]
    list[4] += ' ' + message[4]
    list[5] += ' ' + message[5]
    list[6] += ' ' + message[6]
    list[7] += ' ' + message[7]
    return list.join('\n')
  }
}

module.exports = WarningImageWebpackPlugin
