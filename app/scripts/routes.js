import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';
import { getCookie, setCookie } from './cookie';

function renderIndexPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.index({products: responseText['products'], images: responseText['images']});
};

function renderCategoryPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.categories({categories: responseText['taxons']});
};

function renderCategoryProductsPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.category_products({products: responseText['products']});
};

function renderProductShowPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.show({product: responseText.product, productProperties: responseText.product_properties, images: responseText['images']});
};

function renderAllProductsPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.products({product: responseText.product, images: responseText['images']});
};

function renderMyOrders(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.my_orders({orders: responseText});
};

function renderCart() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.cart();
};

function renderProfile() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.my_profile();
};

function renderCheckout() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.checkout();
};

function createOrder(response) {
  setCookie('orderId', response['order']['number'])
};

function renderTemplate() {
  // if(getCookie('orderId').length == 0){
  //   (new SpreeApi.createOrder()).sendRequest({cb: createOrder});
  // }

  var path = window.location.pathname.split('/')[1],
      id = window.location.pathname.split('/')[2],
      category_id = window.location.pathname.split('/')[2];
  switch(path) {
    case 'categories' : (new SpreeApi.taxonomyList()).sendRequest({cb: renderCategoryPage});
    break;
    case 'product' : (new SpreeApi.productShow()).sendRequest({cb: renderProductShowPage, params: { id: id }});
    break;
    case 'category_products' : (new SpreeApi.productsList()).sendRequest({cb: renderCategoryProductsPage, params: { q: { taxons_taxonomy_id_eq: category_id }}});
    break;
    case 'cart' : (new SpreeApi.productsList()).sendRequest({cb: renderCart});
    break;
    case 'checkout' : (new SpreeApi.productsList()).sendRequest({cb: renderCheckout});
    break;
    case 'my_orders' : (new SpreeApi.productsList()).sendRequest({cb: renderMyOrders})
    break;
    case 'products' : (new SpreeApi.productsList()).sendRequest({cb: renderAllProductsPage});
    break;
    case 'my_profile' : (new SpreeApi.productsList()).sendRequest({cb: renderProfile});
    break;
    default : (new SpreeApi.productsList()).sendRequest({cb: renderIndexPage});
  }
}

renderTemplate();

// (new SpreeApi.myOrders()).sendRequest({cb: renderMyOrders, path: '/api/orders/mine'});
