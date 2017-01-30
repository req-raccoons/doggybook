angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope, Prof, $window, $http) {
  // userName identifies the given user
  // profile object stores all of the info for the user from the db
  $scope.profile = {};
  $scope.userName = $scope.userName || 'rj';

  var profileRender = function () {
    Prof.showProf()
      // console.log('$scope.userName :', $scope.userName)
    // showProfile is a function in the Profiles factory that queries the database for a given userID
      .then(function (profData) {
        console.log('profile.js line 13 profdata: ', profData);
        $scope.profile = profData.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  profileRender();
  });
