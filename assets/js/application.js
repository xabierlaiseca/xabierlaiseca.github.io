$(document).ready(function(){
	$('.nav li a').click(function(e){
		if ($( this ).parent('li').hasClass('active')) {
			return;
		}
		
		var next = $($(this).attr('href'));
		var current = $("#" + $(".current").attr('id'));
		
		var elements = $('.nav li');
		var nextIndex = elements.index($(this).parent('li'));
		var currentIndex = elements.index($('.active'));
		
		var outClass;
		var inClass;
		
		if(currentIndex < nextIndex) {
			outClass = 'fadeOutLeftBig';
			inClass = 'fadeInRightBig';
		} else {
			outClass = 'fadeOutRightBig';
			inClass = 'fadeInLeftBig';
		}
		
		current.removeClass('current').addClass(outClass);
		next.removeClass("hidden").addClass(inClass + ' current');
		
		$( '#nav-top' ).children('li').removeClass('active');
		$( this ).parent('li').addClass('active');
		
		e.preventDefault();
	});
	$('.page').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
		var finished = $("#" + e.currentTarget.id);
		if(finished.hasClass('current')) {
			finished.removeClass('fadeInRightBig fadeInLeftBig');
		} else {
			finished.addClass('hidden').removeClass('fadeOutLeftBig fadeOutRightBig');
		}
	}); 
});

$("#biography").load("biography.html");
$("#publications").load("publications.html");