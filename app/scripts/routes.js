import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1));
  var sURLVariables = sPageURL.split('&');
  var sParameterName;
  var i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function getActivePage(page) {
  var activePage = Number(decodeURIComponent(window.location.search.substring(1)).split('=')[1]);
  if(isNaN(activePage)) {
    $('.pagination li').first().addClass('active');
  }
  $('.pagination').find('li').each(function() {
    if($(this).index() + 1 == activePage) {
      $('.pagination li').removeClass('active');
      $(this).addClass('active');
    }
  });
  if(activePage > page) {
    $('.products-found').hide();
    $('.products-not-found').removeClass('hide');
  }
};

function renderIndexPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.index({
    products: responseText['products'],
    images: responseText['images']
  });
};

function renderCategoryPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.categories({
    categories: responseText['taxons']
  });
};

function renderCategoryProductsPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.category_products({
    products: responseText['products'],
    images: responseText['images'],
    meta: responseText['meta']
  });
  var totalPages = responseText.meta.total_pages;
  for(var index = 1; index <= totalPages; index++) {
    $('.pagination-row .pagination').append('<li><a href="/category_products/?page=' + index + '">' + index + '</a></li>');
  }
  getActivePage(totalPages);
};

function renderProductShowPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.show({
    product: responseText['product'],
    productProperties: responseText['product_properties'],
    images: responseText['images'],
    variants: responseText['variants']
  });
};

function renderAllProductsPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.products({
    product: responseText['product'],
    images: responseText['images']
  });
};

function renderMyOrders(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.my_orders({
    addresses: responseText['addresses'],
    orders: responseText['orders'],
    line_items: responseText['line_items'],
    payment_methods: responseText['payment_methods'],
    payments: responseText['payments'],
    shipments: responseText['shipments'],
    shipping_rates: responseText['shipping_rates'],
    variants: responseText['variants'],
    images: responseText['images']
  });
};

function renderCart() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.cart();
};

function renderCheckout() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.checkout();
};

function createOrder(response) {
  setCookie('orderId', response['order']['number']);
};

function renderTemplate() {

  var path = window.location.pathname.split('/')[1],
      id = window.location.pathname.split('/')[2],
      category_id = window.location.pathname.split('/')[2];

  switch(path) {
    case 'categories':
      new SpreeApi.taxonomyList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderCategoryPage});
      break;
    case 'product':
      new SpreeApi.productShow('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderProductShowPage, params: { id: id }});
      break;
    case 'category_products':
      new SpreeApi.productsList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderCategoryProductsPage, params: { q: { taxons_id_eq: category_id }, per_page: 6, page: getUrlParameter('page') }});
      break;
    case 'cart':
      new SpreeApi.productsList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderCart});
      break;
    case 'checkout':
      new SpreeApi.productsList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderCheckout});
      break;
    case 'my_orders':
      new SpreeApi.myOrders('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderMyOrders, path: '/api/ams/orders', method: 'GET'})
      break;
    case 'products':
      new SpreeApi.productsList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderAllProductsPage});
      break;
    default:
      new SpreeApi.productsList('https://spree-yoda-theme.herokuapp.com/').sendRequest({cb: renderIndexPage, params: {per_page: 8}});
  }
}

renderTemplate();
