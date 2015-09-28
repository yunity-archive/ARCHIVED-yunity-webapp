var angular = require('angular');
var L = require('leaflet');

angular.module('yunity').controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    this.hideMap = false;

    // $scope.foodbaskets = [];
    $scope.foodbaskets = [{
        title: 'Banana basket',
        description: 'fresh, bright yellow bananas',
        user: {
            name: 'Marcel'
        },
        position: {
            name: 'Hawaii'
        }
    }];

    $scope.bodyClass = {
        'hide-map': this.hideMap
    };

    $scope.toggleMap = function() {
        this.hideMap = !this.hideMap;
        $scope.bodyClass = {
            'hide-map': this.hideMap
        }
    };

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $http.get('http://localhost:3000/db').
        then(function(response) {
            $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            console.log(response);
    });

}]);
