let socket = io();
socket.on('user', function ({ username, currentUsers, connected }) {
  $('#num-users').text(currentUsers + ' users online');
  let message = username + (connected ? ' has joined the chat' : ' has let the chat');
  $('#messages').append($('<li>').html('<b>' + message + '<b>'));
});

$(document).ready(function () {
  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    var messageToSend = $('#m').val();

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
});
