var test = require('tape');

var mozo = require('./');

test('first', function (t) {
  t.plan(2);
  var password = new Buffer('super secret');
  var obj = {
    something: 'here',
    array: ['is', 'here'],
    number: 1
  };
  mozo.objectEncrypter(obj, password).then(function (buf) {
    t.ok(Buffer.isBuffer(buf), 'is a buffer');
    return mozo.objectDecrypter(buf, password);
  }).then(function (o) {
    t.deepEquals(o, obj, 'are equal');
  }).catch(function (e) {
    t.ok(false, e.message);
  });
});