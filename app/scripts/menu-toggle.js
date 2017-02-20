$(document).ready(function() {

  $('#wrapper').on('click', '.menu-toggle-btn', function() {
    $('.menu-container').addClass('expand');
  });

  $('#wrapper').on('click', '.main-search-btn', function() {
    $('.search-bar').addClass('drop');
  });

  $('#wrapper').on('click', '.close-menu', function() {
    $('.menu-container').removeClass('expand');
  });

  $('#wrapper').on('click', '.close-search', function() {
    $('.search-bar').removeClass('drop');
  });

  $('#wrapper').on('click', '.cart-icon', function() {
    $('.cart-container').addClass('expand');
  });

  $('#wrapper').on('click', '.close-cart', function() {
    $('.cart-container').removeClass('expand');
  });

});