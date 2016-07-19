$(document).ready(function() {
	var $root = $('html, body');
	$('a').click(function() {
		var href = $(this).attr('href');
			$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
			});
		return false;
	});
});

//function for slideshow
$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  3000);

//Function to keep the label up if there is some content in the form
$(function(){

	$('.application-form .input-group input, .application-form .text-area-group textarea').focusout(function(){

		var text_val = $(this).val();

		if(text_val === "") {

			$(this).removeClass('has-value');

		}	else {

			$(this).addClass('has-value');

		}

	});

});

//Script for google maps
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.502784, -0.019059),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

//Script for responsive menu
$(".open-panel").click(function(){
  
	$("body").addClass("openNav");
  
});
	
$(".close-panel, #content, li a").click(function(){
  
	$("body").removeClass("openNav");
  
});