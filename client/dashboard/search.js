
var addressList = ['345 Broadway, New York', '875 Broadway', '125 8th Ave', '123 Broadway'];

angular.module('doggyBook.search', [])
.controller('SearchController', function ($scope, Search) {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(40.746275, -73.988249),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = [];

  var createMarker = function (latlng){
    console.log('lat lng', latlng);
    var marker = new google.maps.Marker({
      position: latlng,
      map: $scope.map,
    });
    $scope.markers.push(marker);

.controller('SearchController', function($scope, Search) {
  // the results object should store all of the results of the query; ie all users matching a given query
  $scope.results = {};
  // the query object will include the search parameters
  // $scope.query = {};
  $scope.getUsers = function (query) {
    console.log('search.js getUsers query: ', query);
    Search.getAllUsers(query)
    .then(function(response) {
      console.log('searchController response: ', response.data);
      $scope.results = response.data;
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  var geoConvertor = function (addressVal) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: addressVal}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var result = results[0].geometry.location;
        console.log('result', result);
        createMarker(result);
      }
    });
  }

  for(var i=0; i<addressList.length; i++) {
    geoConvertor(addressList[i]);
  }

// the results object should store all of the results of the query; ie all users matching a given query
$scope.results = {};
// the query object will include the search parameters
$scope.query = {};
$scope.getUsers = function () {
  Search.getAllUsers(query)
    .then(function(response) {
      $scope.results = response;
    })
    .catch(function(error) {
      console.error(error);
    });
}
});
