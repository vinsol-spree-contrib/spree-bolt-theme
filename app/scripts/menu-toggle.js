$(window).on('load', function() {

  $('body').on('click', '.menu-toggle-btn', function() {
    $('.menu-container').addClass('expand');
  });

  $('body').on('click', '.main-search-btn', function() {
    $('.search-bar').addClass('drop');
  });

  $('body').on('click', '.close-menu', function() {
    $('.menu-container').removeClass('expand');
  });

  $('body').on('click', '.close-search', function() {
    $('.search-bar').removeClass('drop');
  });

  $('body').on('click', '.cart-icon', function() {
    $('.cart-container').addClass('expand');
  });

  $('body').on('click', '.close-cart', function() {
    $('.cart-container').removeClass('expand');
  });

  $('body').on('click', '.product-property-heading', function() {
    $(this).next('.product-property').slideToggle(200);
  });

  $('body').on('click', '.continue-shopping', function() {
    $('.cart-container').removeClass('expand');
    $('html, body').animate({scrollTop: $('.category-section').offset().top - 115}, 500);
  });

});

$(window).on('scroll', function() {
  if($(this).scrollTop() > 74) {
    $('body').addClass('header-up');
  }
  else {
    $('body').removeClass('header-up'); 
  }
});