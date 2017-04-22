

$(document).ready(function() {
  app.init();
});
var app = {
  init: function() {
    $('#submit').on('click', function(e) {
      e.preventDefault();
      app.handleSubmit();
    });
    app.fetch();
    // setInterval(function() {
    //   app.fetch();
    // }, 3000);

  },
  rooms: {},
  room : 'lobby',

  url: 'http://localhost:3000/',

  classTag: [],

  className: '',

  send: function(message) {
    $.ajax({
      url: app.url + 'messages',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(message), 
      success: function() {
        console.log('message was sent');
        app.fetch();
      },
      error: function() {
        console.log('message was not sent');
      }
    });
  },
  fetch: function() {
    $.ajax({
      url: app.url + 'messages',
      type: 'GET',
      contentType: 'application/json',
      //data: 'order=-createdAt', 
      success: function(data, message) {
        var parsedMessages = JSON.parse(data);

        for (var i = 0; i < parsedMessages.length; i++) {
          if (!app.rooms.hasOwnProperty( parsedMessages[i].roomname) && parsedMessages[i].roomname) {
            app.rooms[parsedMessages[i].roomname] = 1;
        } 

        }//console.log(app.rooms);
        // console.log(filterXSS('<a>'))
        app.renderRoom(app.rooms);
        // var parsedMessages = data.results;
         // console.log(parsedMessages);
        //app.renderMessage(parsedMessages);
        app.clearMessages();
        app.filterRooms(parsedMessages, app.room);
      },
      error: function() {
        console.log('message was not sent');
      }
    });
  },
  clearMessages: function() {
    $('#chaters').html('');
  },
  renderMessage: function(message) {
    message.forEach(function(item) {
      
      var user = $('<div>' + item.username + '</div>' ).text();
      var msg = $('<div>' + item.messages + '</div>' ).text();
      var room = $('<div>' + item.roomname + '</div>' ).text();

      var $message = $('<div id="test" class="well">' + '<a href="#" id="'+ user + ' class="'+ app.className + '">' + user + ' ' + 
        '</a><span class="text">' + msg + '</span>' + ' ' +
        '<span>' + room + '</span></div>');
      // for (var i = 0; i < app.classTag.length; i++) {
      //   if (filterXSS(user) === app.classTag[i]) {
      //     $('.' + filterXSS(user)).addClass('bold');
      //   }
      // };
      $('#chaters').append($message);
       var $nodes = $('#test')
       //console.log($('#test'));
       $('#test').children().each(function(item) {
       });

      $('#' + user).on('click', app.handleUsernameClick);
    });

  },
  renderRoom: function(room) {
    var roomsLen = Object.keys(room).length;
    var len = $('#chatRooms').children().length; 
    if (roomsLen !== len) {
      $('#chatRooms').html('');
      for (var key in app.rooms) {
        var keys = $('<p>' + key + '</p>').text();
        var $room = '<option class="option" value = "' + keys + '" id = "' + keys + '">' + keys + '</option>';
        $('#chatRooms').append($room);
      };
      $('#chatRooms').change( function() {
        app.room = $('#chatRooms option:selected').text();
        app.fetch();
      });
    };
  },
  handleUsernameClick: function(e) {
    console.log('clicked');
    app.id = e.target.id
    var myClass = this.className;
    console.log(e.target.id);
    app.classTag.push(myClass);
  },
  handleRoomClick : function(event) {
    console.log(event);
  },
  handleSubmit: function() {
    var identity = 5;
    var username = location.search.slice(10);
    var $appendMessage = $('#message').val();
    var $appendRoom = $('#room').val();
    var message = {
      roomname: $appendRoom || 'lobby',
      messages: $appendMessage,
      username: username,
    };
    $('#message').val('');
    $('#room').val('');
    app.send(message);
    app.fetch();
  },
  filterRooms : function(message, roomname) {
    if(roomname.toLowerCase() === "lobby") {
        app.renderMessage(message);
    } else {

      var filt = message.filter(function(item ) {
        if(item.roomname) {
          return item.roomname.toLowerCase() === roomname.toLowerCase();
        }
      });
      app.renderMessage(filt);
    }
  }
};








