import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index'
function renderIndexPage(responseText){
  document.querySelector('#wrapper').innerHTML = MyApp.html.index({products: responseText['products'], images: responseText['images']});
};

function renderCategoryPage(responseText){
  document.querySelector('#wrapper').innerHTML = MyApp.html.category({categories: responseText['taxonomies']});
};

function renderTemplate(){
  var path = window.location.pathname.split('/')[1]
  switch(path) {
    case '' : (new SpreeApi.productsList()).sendRequest({cb: renderIndexPage});
    break;
    case 'category' : (new SpreeApi.taxonomyList()).sendRequest({cb: renderCategoryPage});
    break;
  }
}

renderTemplate()