
var profController = require('./controller/profController.js');
var searchController = require('./controller/searchController.js');
// var userController = require('./controller/userController.js');

// we can rename this later, but this is the 'controller' for users
// userController has been commented out to accomodate this
var userController = require('./handlers.js');

module.exports = function (app, express) {
  console.log('loading routes...');
  app.post('/api/signin', handle.signin);
  app.post('/api/signup', handle.signup);
  // not yet implemented in handlers
  // app.get('/api/signedin', handle.checkAuth);


/*   these controllers have not been defined yet, so it is breaking the server. uncomment when/as they are defined
  app.post('/api/signin', userController.signin);
  app.post('/api/signup', userController.signup);
  app.get('/api/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);

  // app.get('/api/prof', profController.displayProf);
  // app.post('/api/prof', profController.editProf);

  //vvv someone sends a search request
  // app.post('/api/search', searchController.newSearchQuery);
  //vvv might not be necessary? sends the results of the search request
  // app.get('/api/search', searchController.displaySearchQuery);

*/

};
