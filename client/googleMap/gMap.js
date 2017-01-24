angular.module('doggyBook.gMap',[])
// get different search constraints, i.e. zipCode
.controller('gMapController', function ($scope, Search) {
  $scope.address = {};
  $scope.getAddress = function() {
    Search.getAddress(Scope)
  }

})
