import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';

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

function renderCart() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.cart();
};

function renderCheckout() {
  document.querySelector('#wrapper').innerHTML = MyApp.html.checkout();
};

function renderTemplate() {
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
    case 'products' : (new SpreeApi.productsList()).sendRequest({cb: renderAllProductsPage});
    break;
    default : (new SpreeApi.productsList()).sendRequest({cb: renderIndexPage});
  }
}

renderTemplate();
