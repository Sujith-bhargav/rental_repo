var http = require('http');
var urlencode = require('urlencode');
var msg = urlencode('hello js');
var toNumber = 'TO_PHONE_NO';
var username = 'TEXTLOCAL_USER_EMAIL';
var hash = 'TEXTLOCAL_USER_HASH'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
var sender = 'txtlcl';
var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;
var options = {
  host: 'api.textlocal.in', path: '/send?' + data
};
callback = function (response) {
  var str = '';//another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });//the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}//console.log('hello js'))
http.request(options, callback).end();//url encode instalation need to use $ npm install urlencode