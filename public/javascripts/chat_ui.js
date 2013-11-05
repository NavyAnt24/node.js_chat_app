$(document).ready(function(){
  (function(root){
    var Chat = root.Chat = (root.Chat || {})

    $('#chat-form').on('submit', function(e) {
      e.preventDefault();

      var message = $('#chat').val();
      if message.slice(0,5);

      Chat.sendMessage(message);
    });

    window.socket.on('sendToAll', function(message){
      $('#chat-space').append($('<p></p>').text(message));
    });

  })(this);
});