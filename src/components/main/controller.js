var angular = require('angular');
var aboutTemplate = require('ngtemplate!./home.html');

angular.module('yunity').controller('mainCtrl', [
    '$scope', '$http', 'foodbasketsPayload',
    function($scope, $http, foodbasketsPayload) {

    // $scope.foodbaskets = [];
    $scope.foodbaskets = foodbasketsPayload;

    $scope.tabs = [
    	{title:'Home', template:aboutTemplate},
    	{title:'Profile', template:aboutTemplate},
    	{title:'About', template:aboutTemplate}
  	];

    $http.get('http://localhost:3000/db').
        then(function(response) {
            $scope.foodbaskets = response.data;  //retrieve results and add to existing results
    });

}]);
