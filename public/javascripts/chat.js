$(document).ready(function(){
  (function(root){
    var Chat = root.Chat = function() {
      this.socket = io.connect('http://10.0.1.20:8080');
    }

    Chat.sendMessage = function(message) {
      socket.emit('message', message);
    }
  })(this);
})