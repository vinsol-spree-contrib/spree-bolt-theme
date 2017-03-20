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

Handlebars.registerHelper('isOrderComplete', function(completedAt, options) {
  if(completedAt != null) {
    return options.fn(this);
  }
});

Handlebars.registerHelper('formatDate', function(date) {
  return new Date(date).toDateString();
});

Handlebars.registerHelper('orderAddress', function(address_id, address) {
  var _address = address.find(function(element){return element.id == address_id});
  return '<div class="address-container">'
  + '<div class="row">' + '<div class="col-md-4">Name <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.firstname + ' ' + _address.lastname + '</div>' + '</div>'
  + '<div class="row">' + '<div class="col-md-4">Address 1 <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.address1 + '</div>' + '</div>'
  + '<div class="row">' + '<div class="col-md-4">Address 2 <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.address2 + '</div>' + '</div>'
  + '<div class="row">' + '<div class="col-md-4">City <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.city + '</div>' + '</div>'
  + '<div class="row">' + '<div class="col-md-4">Phone <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.phone + '</div>' + '</div>'
  + '<div class="row">' + '<div class="col-md-4">Zip Code <span class="pull-right">:</span>' + '</div>' + '<div class="col-md-8 p-l-0">' + _address.zipcode + '</div>' + '</div>'
  +'</div>'
});

Handlebars.registerHelper('line_items', function(order_id, line_items) {
  var line_item = line_items.find(function(element){return element.order_id == order_id});
  return '<span>' + line_item.id + '</span>';
});
