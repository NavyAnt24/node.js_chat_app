function createChat(server){
  root.io = io = require('socket.io').listen(server);
  var guestnumber = 1;
  var nicknames = {};
  var namesUsed = {};

  io.sockets.on('connection', function(socket) {
    guestnumber += 1;
    socket.on('message', function(message) {
      io.sockets.emit('sendToAll', message);
    });

    socket.on('nicknameChangeRequest', function(newNickname) {

    });
  });
}

exports.createChat = createChat;