angular.module('doggyBook', [
  'doggyBook.auth', 'doggyBook.profile',
  'doggyBook.search',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/landing', {

    })
    .when('/signin', {

    })
    .when('/signup', {

    })
    .when('/profile', {

    })
    .when('/search'), {

    })
    .otherwise({
      redirectTo: '/landing'
    });
    // $httpProvider.interceptors.push('AttachTokens');
})

  .controller('')
