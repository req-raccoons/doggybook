angular.module('doggyBook.search', [])

.controller('SearchController', function($scope, Players) {
  $scope.data = {};
  $scope.getUsers = function () {
    Search.getAllUsers()
      .then(function(users) {
        $scope.data.users = users;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
