angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope, Prof) {
  // userName identifies the given user
  $scope.userName = 'rj1';
  // profile object stores all of the info for the user from the db
  $scope.profile = {};

  var profileRender = function () {
    Prof.showProf($scope.userName)
    // showProfile is a function in the Profiles factory that queries the database for a given userID
      .then(function (profData) {
        $scope.profile = profData;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  profileRender();
  });
