object-encrypter
================

An object encrypter that might actually work for us.


```js
var encrypter = require('./app-config.json');

encrypter.objectEncrypter(object, key<buffer>); //returns promise for ciphertext buffer
encrypter.objectDecrypter(ciphertext<buffer>, key<buffer>); //returns promise for object
```
