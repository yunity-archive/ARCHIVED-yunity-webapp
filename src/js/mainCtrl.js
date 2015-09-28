var angular = require('angular');

angular.module('yunity').controller('mainCtrl', [
    '$scope', '$http', 'foodbasketsPayload',
    function($scope, $http, foodbasketsPayload) {

    // $scope.foodbaskets = [];
    $scope.foodbaskets = foodbasketsPayload;

    $http.get('http://localhost:3000/db').
        then(function(response) {
            $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            console.log(response);
    });

}]);
