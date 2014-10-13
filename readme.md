object-encrypter [![Build Status](https://travis-ci.org/AppGeo/object-encrypter.svg)](https://travis-ci.org/AppGeo/object-encrypter)
===

An object encrypter that might actually work for us.


```js
var encrypter = requrie("./whatever this is called");

encrypter.objectEncrypter(object, key<buffer>); //returns promise for ciphertext buffer
encrypter.objectDecrypter(ciphertext<buffer>, key<buffer>); //returns promise for object
```