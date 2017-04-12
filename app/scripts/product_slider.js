$(window).on('load', function() {
	setTimeout(function() {
		$('.flexslider').flexslider({
    	animation: "fade",
    	controlNav: "thumbnails",
    	directionNav: false
  	});
  	$('.flexslider').addClass('move-in');
	}, 250);
});
