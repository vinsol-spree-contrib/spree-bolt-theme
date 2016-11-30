console.log('\'Allo \'Allo!');
import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index'
console.log(SpreeApi)
function renderApp(responseText){
  document.querySelector('#main').innerHTML = MyApp.html.test({products: responseText['products']});
  // document.querySelector('#app').innerHTML = MyApp.html.index({products: responseText['products']});
}
var products = (new SpreeApi.productsList()).sendRequest({cb: renderApp})

