var handlebar_helpers  = require('handlebars');
handlebar_helpers.registerHelper('noop', function(options) {
  console.log('33')
  return '<div>22</div>';
});

module.exports = handlebar_helpers;
