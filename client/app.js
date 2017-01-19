angular.module('doggyBook', [
  'doggyBook.auth', 'doggyBook.profile',
  'doggyBook.search',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: 'index.html',
      controller: 'LandingController'
    })
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/profile', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfController',
      authenticate: true
    })
    .when('/search'), {
      templateUrl: 'search/search.html',
      controller: 'SearchController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/landing'
    });
    $httpProvider.interceptors.push('AttachTokens');
})
