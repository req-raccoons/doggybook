angular.module('doggyBook.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    console.log('auth.js signin function has been invoked!')
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.doggyBook', token);
        $location.path('/landing');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.doggyBook', token);
        $location.path('/landing');
      })
      .catch(function (error) {
        console.log('danger danger!!! auth.js signup function has an error!')
        console.error(error);
      });
  };
});
