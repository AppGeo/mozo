mozo [![Build Status][travis-badge]][travis-badge-url]
================

An object encrypter that might actually work for us.

[![NPM][npm-badge]][npm-badge-url]

## Usage

```js
var encrypter = require('mozo');

encrypter.objectEncrypter(object, key<buffer>); //returns promise for ciphertext buffer
encrypter.objectDecrypter(ciphertext<buffer>, key<buffer>); //returns promise for object
```

[npm-badge]: https://nodei.co/npm/mozo.svg?downloads=true&stars=true
[npm-badge-url]: https://nodei.co/npm/mozo/
[travis-badge]: https://travis-ci.org/AppGeo/mozo.svg
[travis-badge-url]: https://travis-ci.org/AppGeo/mozo
