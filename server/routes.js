var profController = require('./controller/profController.js');
var searchController = require('./controller/searchController.js');
// var userController = require('./controller/userController.js');

// we can rename this later, but this is the 'controller' for users
// userController has been commented out to accomodate this
var userController = require('./handlers.js');

module.exports = function (app, express) {

  app.post('/api/signin', userController.signin);
  app.post('/api/signup', userController.signup);
  app.get('/api/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);

  /* IMPORTANT! The routes below will need to be built before being uncommented */

  // app.get('/api/prof', profController.displayProf);
  // app.post('/api/prof', profController.editProf);

  //vvv someone sends a search request
  // app.post('/api/search', searchController.newSearchQuery);
  //vvv might not be necessary? sends the results of the search request
  // app.get('/api/search', searchController.displaySearchQuery);

  // below is reference from shortly angular --> consider whether or not we want helpers
  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};
