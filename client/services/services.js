angular.module('doggyBook.services', [])

.factory('Auth', function ($http, $location, $window) {

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    //note that we might need to combine this with Prof.newProf below
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.doggyBook');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.doggyBook');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})

.factory('Prof', function ($http, $location, $window) {
//prof factory skeleton ->
  var newProf = function (prof) {
    //this function should run with signup if we are inputting prof data there
    return $http({
      method: 'POST',
      url: '/api/prof',
      data: prof
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    newProf: newProf
  }

.factory('Search', function ($http, $location, $window) {

  var getAllUsers = function () {
    //this function should query all profs from DB, send to search.html and
    return $http({
      method: 'GET',
      url: '/api/search',
      data: query
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    getAllUsers: getAllUsers
  };
})

.factory('Landing', function ($http, $location, $window) {

  var landingFunc = function () {
    //this function should just allow for rerouting between other
    return $http({
      method: 'GET',
      url: '/api/search',
      data: query
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    landingFunc: landingFunc
  };
});
