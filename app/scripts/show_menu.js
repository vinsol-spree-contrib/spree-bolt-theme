var ShowMenu = function(options) {
  this.menuOpenBtn = options.menuOpenBtn;
  this.menu = options.menu;
  this.menuCloseBtn = options.menuCloseBtn
  this.classToToggle = options.classToToggle;
};

ShowMenu.prototype.show = function() {
  var _this = this;
  this.menuOpenBtn.on('click', function() {
    _this.menu.addClass(_this.classToToggle);
  });
};

ShowMenu.prototype.hide = function() {
  var _this = this;
  this.menuCloseBtn.on('click', function() {
    _this.menu.removeClass(_this.classToToggle);  
  });
};

ShowMenu.prototype.bindEvents = function() {
  this.show();
  this.hide();
};

$(document).ready(function() {
  var options = {
    menuOpenBtn: $('.menu-toggle-btn'),
    menu: $('.menu-container'),
    menuCloseBtn: $('.close-menu'),
    classToToggle: 'expand'
  },

  showMenu = new ShowMenu(options);
  showMenu.bindEvents();
});
