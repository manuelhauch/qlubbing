$( document ).ready(function() {
  getQueue();
  setInterval(getQueue, 300000);

});

function getQueue() {
  var googleAPI = "https://script.google.com/macros/s/AKfycbw66eC22cE01dw1pHcHWQU7RBCYLuv3c344ZDmIWDMXWNN7fTs/exec";

    $.getJSON(googleAPI, function (data) {
      var items = [];
      for(i in data.clubs) {
        items[i] = new Array();
          items[i].push( "<li id='queue'> Queue: " + data.clubs[i].queue + "</li>" );
          items[i].push( "<li id='visitors'> Visitors: "+ data.clubs[i].visitors + "</li>" );
          items[i].push( "<li id='lastUpdate'> Last Updated: " + data.clubs[i].lastUpdate + "</li>" );
      }

      $("#e-pub-queue").html('');
      $( "<ul/>", {
        html: items[0].join( "" )
      }).appendTo( "#e-pub-queue");

      $("#origo-queue").html('');
      $( "<ul/>", {
        html: items[1].join( "" )
      }).appendTo( "#origo-queue");

      $("#villan-queue").html('');
      $( "<ul/>", {
        html: items[2].join( "" )
      }).appendTo( "#villan-queue");


    });
}
