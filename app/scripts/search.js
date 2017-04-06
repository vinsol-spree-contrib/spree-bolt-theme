import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';


function showSearchResults(responseText) {
  // document.querySelector('#wrapper').innerHTML = MyApp.html.index({
  //   products: responseText['products'],
  //   images: responseText['images']
  // });
};


function searchProducts() {
  $('.search').on('input', function(){
    new SpreeApi.productsList().sendRequest({cb: showSearchResults, params: {per_page: 5, q: { name_cont: 'ruby' }}});
  })
}
$(function(){
  searchProducts();
})
