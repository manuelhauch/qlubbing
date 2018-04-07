$( document ).ready(function() {
  getQueue();
  setInterval(getQueue, 300000);
});

function getQueue() {
	
	/*E-Pub*/
	$.getJSON("https://jexhnkj8y0.execute-api.eu-central-1.amazonaws.com/beta1/count?clubId=E-Pub",{callback: "?"}, function (data) {

      var items = "<li id='queue'> Queue Time: " + data.queueingTime + "</li>";
	  items += "<li id='visitors'> Visitors: "+ parseAPIResult(data.currentVisitors,false) + "</li>" ;
	  items += "<li id='lastUpdate'> Last Updated: " + parseAPIResult(data.lastUpdated,true) + "</li>";
       
      $("#e-pub-queue").html('');
      $( "<ul/>", {
        html: items
      }).appendTo( "#e-pub-queue");
    });

	
	/*Villan*/
	$.getJSON("https://jexhnkj8y0.execute-api.eu-central-1.amazonaws.com/beta1/count?clubId=Villan",{callback: "?"}, function (data) {

	console.log(data);
	
      var items = "<li id='queue'> Queue Time: " + data.queueingTime+ "</li>";
	  items += "<li id='visitors'> Visitors: "+ parseAPIResult(data.currentVisitors,false) + "</li>" ;
	  items += "<li id='lastUpdate'> Last Updated: " + parseAPIResult(data.lastUpdated,true) + "</li>";
       
      $("#villan-queue").html('');
      $( "<ul/>", {
        html: items
      }).appendTo( "#villan-queue");
    });
	
}


function parseAPIResult(resultToParse, isTimeValue){
	if(resultToParse == "0"){
		return "-";
	}else{
		if(isTimeValue){
			var d = new Date(resultToParse*1000);
			return d.getHours() + ":" +d.getMinutes();
		}
	}
	return resultToParse;
}
