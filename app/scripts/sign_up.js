import { SpreeApi } from './../../bower_components/spree-frontend-integration/lib/index';

$(document).ready(function() {
  $('#wrapper').on('submit', '#sign-up', function(event) {
    (new SpreeApi.signUp()).sendRequest({params: {
      user: {
        email: $('#user-sign-up-name').val(),
        password: $('#user-sign-up-password').val()
      }
    }, cb: handleSuccess});
    event.preventDefault();
  });

  function handleSuccess(response) { 
    var message = 'Your account has been successfully created. Please Login to continue.';
    $('#flash').html(message);
  };
});

$(document).ready(function() {
  $('#wrapper').on('submit', '#login', function(event) {
    (new SpreeApi.login()).sendRequest({params: {
      user: {
        email: $('#user-login-name').val(),
        password: $('#user-login-password').val()
      }
    }, cb: handleLoginSuccess});
    event.preventDefault();
  });

  function handleLoginSuccess(response) { 
    var message = 'You have been successfully logged in.';
    $('#flash').html(message);
  };
});
