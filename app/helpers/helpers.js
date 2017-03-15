Handlebars.registerHelper('productUrl', function(id) {
  return '/product/' + id;
});

Handlebars.registerHelper('productImageUrl', function(image_ids, images) {
  return images.find(function(element){return element.id == image_ids[0]}).large_url;
});

Handlebars.registerHelper('productCategoryUrl', function(id) {
  return 'category_products/' + id;
});

Handlebars.registerHelper('isLoggedIn', function(options) {
  var cookie_auth_key = "; auth_token=";

  if(document.cookie.indexOf(cookie_auth_key) > -1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
