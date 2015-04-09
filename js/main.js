$(document).ready(function() 
{

	$('.piece-thumb-container').hover(function() {
		var winWidth = $(window).width();
		if (winWidth > 767) {
			$overlay = $(this).children(":first");
			$overlay.fadeTo("fast", 1);
		}
	}, function() {
		var winWidth = $(window).width();
		if (winWidth > 767) {
			$overlay = $(this).children(":first");
			$overlay.fadeTo("fast", 0);
		}
	});

});

