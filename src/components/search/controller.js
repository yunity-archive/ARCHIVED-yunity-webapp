var angular = require('angular');


angular.module('yunity').controller('searchCtrl', ['$scope', '$http',function($scope, $http) {
	$scope.selectedAddress = '';



	$scope.getSearch = function (viewValue) {
		var params = {address: viewValue, sensor: false};
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
    .then(function(res) {
      return res.data.results;
	});
  };
}]);