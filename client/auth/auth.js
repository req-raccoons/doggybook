angular.module('doggyBook.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.doggyBook', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
<<<<<<< HEAD
        $window.localStorage.setItem('com.doggyBook', token);
=======
        $window.localStorage.setItem('com.doggybook', token);
>>>>>>> Debugging various front-end issues including NgRoute installation, naming conventions, and controllers/factories.
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
