/*var jq = $.noConflict();*/
$(document).ready(function(){
	$("#reb-l-top #myCarousel").mouseover(function(){
		$("#reb-l-top #myCarousel a").show();
	});
	$("#reb-l-top #myCarousel").mouseout(function(){
		$("#reb-l-top #myCarousel a").hide();
	});
	$("#reb-l-bottom #myCarousel1").mouseover(function(){
		$("#reb-l-bottom #myCarousel1 a").show();
	});
	$("#reb-l-bottom #myCarousel1").mouseout(function(){
		$("#reb-l-bottom #myCarousel1 a").hide();
	});


});
