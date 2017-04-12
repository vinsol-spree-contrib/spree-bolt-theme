var ShowSearch = function(options) {
  this.searchOpenBtn = options.searchOpenBtn;
  this.search = options.search;
  this.searchCloseBtn = options.searchCloseBtn
  this.classToToggle = options.classToToggle;
};

ShowSearch.prototype.show = function() {
  var _this = this;
  this.searchOpenBtn.on('click', function() {
    _this.search.addClass(_this.classToToggle);
  });
};

ShowSearch.prototype.hide = function() {
  var _this = this;
  this.searchCloseBtn.on('click', function() {
    setTimeout(function() {
      $('#search-input').val('');
      $('.search-results').html('').removeClass('show-search');
    }, 250);
    _this.search.removeClass(_this.classToToggle);
  });
};

ShowSearch.prototype.bindEvents = function() {
  this.show();
  this.hide();
};

$(window).on('load', function() {
  setTimeout(function() {
    var options = {
      searchOpenBtn: $('.main-search-btn'),
      search: $('.search-bar'),
      searchCloseBtn: $('.close-search'),
      classToToggle: 'drop'
    },

    showSearch = new ShowSearch(options);
    showSearch.bindEvents();
  }, 250);
});
