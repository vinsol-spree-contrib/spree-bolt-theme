import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';
import { getCookie, setCookie } from './cookie'

function addToCart() {
  (new SpreeApi.updateOrder()).sendRequest({cb: showOrder, 'params': { 'id': getCookie('orderId'), 'line_items_attributes': [ { 'quantity': 1, 'variant_id': $('[data-variant-id]:first').data('variant-id') } ]}});
}

$(function(){
	$('.add-to-cart').on('click', function(){
		addToCart();
	})
})
