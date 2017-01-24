import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';

function renderIndexPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.index({products: responseText['products'], images: responseText['images']});
};

function renderCategoryPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.categories({categories: responseText['taxonomies']});
};

function renderCategoryProductsPage(responseText) {
  document.querySelector('#wrapper').innerHTML = MyApp.html.category_products({products: responseText['products']});
};

function renderProductShowPage(responseText) {
  debugger
  document.querySelector('#wrapper').innerHTML = MyApp.html.show({product: responseText.product, productProperties: responseText.product_properties, images: responseText['images']});
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
    default : (new SpreeApi.productsList()).sendRequest({cb: renderIndexPage});
  }
}

renderTemplate();
