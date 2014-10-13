var triplesec = require('triplesec');
var Promise = require('bluebird');
var encrypt = Promise.promisify(triplesec.encrypt);
var decrypt = Promise.promisify(triplesec.decrypt);
function objectEncrypter(obj, key) {
  return encrypt({
    key: new Buffer(key),
    data: new Buffer(JSON.stringify(obj))
  });
}
function objectDecrypter(buf, key) {
  return decrypt({
    key: new Buffer(key),
    data: buf
  }).then(function (resp) {
    return JSON.parse(resp.toString());
  });
}

exports.objectEncrypter = objectEncrypter;
exports.objectDecrypter = objectDecrypter;