$(document).ready(function() {

  $('#wrapper').on('click', '.menu-toggle-btn', function() {
    $('.menu-container').addClass('expand');
  });

  $('#wrapper').on('click', '.main-search-btn', function() {
    $('.search-bar').addClass('drop');
  });

  $('.close-menu').on('click', function() {
    $('.menu-container').removeClass('expand');
  });

  $('.close-search').on('click', function() {
    $('.search-bar').removeClass('drop');
  });

  $('.cart-icon').on('click', function() {
    $('.cart-container').addClass('expand');
  });

  $('.close-cart').on('click', function() {
    $('.cart-container').removeClass('expand');
  });

});