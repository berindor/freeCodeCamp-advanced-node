let socket = io();
socket.on('user', function ({ username, currentUsers, connected }) {
  $('#num-users').text(currentUsers + ' users online');
  let message = username + (connected ? ' has joined the chat' : ' has let the chat');
  $('#messages').append($('<li>').html('<b>' + message + '<b>'));
});
socket.on('chat message', function ({ username, message }) {
  $('#messages').append($('<li>').html(username + ':' + message));
});

$(document).ready(function () {
  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    var messageToSend = $('#m').val();
    socket.emit('chat message', messageToSend);
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
});
