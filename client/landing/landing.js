angular.module('doggybook.landing', [])

.controller('LandingController', function($scope,Players) {
  //only starting the file -> should be able to route to other files; nothing else for now;
  $scope.data = {};
  $scope.landingFunction = function () {
    landing.landingFunc()
      .then(function() {
        $scope.data.landingData = landingData;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
