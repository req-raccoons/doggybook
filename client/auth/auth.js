angular.module('doggyBook.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
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
    console.log('auth.js line 18 signup function has been invoked!')
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
