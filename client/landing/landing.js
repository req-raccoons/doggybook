// currently no functionality - the page only has links to sign-in and signup
// we might want to run a check here that checks if a user is signed in;
  // if so, display a signout link instead of a signin link, also display links to profile & search

angular.module('doggyBook.landing', [])

.controller('LandingController', function($scope, Players) {
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
