var http = require('http');
var path = require('path');
var mime = require('mime');
var Router = require('./router.js').Router;
var createChat = require('./lib/chat_server.js').createChat;


var server = http.createServer(function(req, res){
  var router = new Router(req, res);
  router.route();
});

server.listen(8080);
createChat(server);

console.log("Server running");