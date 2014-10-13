mozo [![Build Status](https://travis-ci.org/AppGeo/mozo.svg)](https://travis-ci.org/AppGeo/mozo)
================

An object encrypter that might actually work for us.


```js
var encrypter = require('mozo');

encrypter.objectEncrypter(object, key<buffer>); //returns promise for ciphertext buffer
encrypter.objectDecrypter(ciphertext<buffer>, key<buffer>); //returns promise for object
```
