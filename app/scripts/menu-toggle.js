$(document).ready(function() {
  $('.menu-toggle-btn').on('click', function() {
    $('.menu-container').addClass('expand');
  });

  $('.main-search-btn').on('click', function() {
    $('.search-bar').addClass('drop');
  });

  $('.close-menu').on('click', function() {
    $('.menu-container').removeClass('expand');
  });

  $('.close-search').on('click', function() {
    $('.search-bar').removeClass('drop');
  });
});