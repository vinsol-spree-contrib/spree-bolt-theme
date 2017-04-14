$(window).on('load', function() {
  $('body').on('load', '.flexslider', function(){
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: "thumbnails",
      directionNav: false
    });
  })
	$('.flexslider').addClass('move-in');
});
