warning-image-webpack-plugin
============================

Installation
------------
```sh
$ npm install warning-image-webpack-plugin --save-dev
```

Usage
-----
Images should be 16x16 sized .png file.

When image not specified, using default image.

Message can be omitted (no messages will printed).

```javascript
const path = require('path')
const WarningImageWebpackPlugin = require('warning-image-webpack-plugin')

module.exports = {
  plugins: [
    new WarningImageWebpackPlugin({
      doneImage: path.resolve(__dirname, 'done.png'),
      failImage: path.resolve(__dirname, 'fail.png'),
      doneMessage: [
        '',
        '',
        '   Congratulations!',
        '',
        ' Build success.',
        '',
        '',
        ''
      ],
      failMessage: [
        '',
        '',
        ' Build failed!',
        '',
        '',
        '',
        '',
        ''
      ]
    })
  ]
}
```

![done](https://raw.githubusercontent.com/hardboiled65/warning-image-webpack-plugin/master/docs/demo-done.png)

![fail](https://raw.githubusercontent.com/hardboiled65/warning-image-webpack-plugin/master/docs/demo-fail.png)

License
-------
Please DO NOT use this useless code blob in open source project. Just using only at your work for showing to your boss.

오픈소스 프로젝트에 이 쓸모없는 코드 쓰레기를 추가하지 마세요. 직장에서 상사에게 보여주기 위한 전시성 목적으로만 사용하여 주세요.
