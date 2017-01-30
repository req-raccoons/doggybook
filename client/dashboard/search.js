var addressList = ['345 Broadway, New York',
                   '875 Broadway, New York',
                   '125 8th Ave, New York',
                   '123 Broadway, New York'];

angular.module('doggyBook.search', [])
.controller('SearchController', function ($scope, Search) {

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(40.746275, -73.988249),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.markers = [];
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var createMarker = function (latlng){
    console.log('lat lng', latlng);
    var marker = new google.maps.Marker({
      position: latlng,
      map: $scope.map,
    });
    $scope.markers.push(marker);
  }

  var geoConvertor = function (addressVal) {
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: addressVal}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log('results ', results);
        var result = results[0].geometry.location;
        console.log('result', result);
        createMarker(result);
      }
    });
  }
  // the results object should store all of the results of the query; ie all users matching a given query
  // the query object will include the search parameters
  // $scope.query = {};
  $scope.getUsers = function (query) {
    $scope.results = {};
    console.log('search.js getUsers query: ', query);
    Search.getAllUsers(query)
    .then(function(response) {
      console.log('searchController response: ', response.data);

      response.data.forEach(userObj => addressList.push(userObj.address));

      addressList.forEach(address => {
        console.log('converting address: ', address);
        geoConvertor(address);
      });
      $scope.results = response.data;
    })
    .catch(function(error) {
      console.error(error);
    });
  }
});
