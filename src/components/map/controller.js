/*
var L = require('leaflet');
*/
angular.module('yunity').controller('mapCtrl', ['$scope', '$http', function($scope, $html) {

        var hideMap = false;

        $scope.bodyClass = {
            'hide-map': hideMap
        };

        $scope.toggleMap = function() {
            hideMap = !hideMap;
            $scope.bodyClass['hide-map'] = !$scope.bodyClass['hide-map'];
        };
        /*
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        */

    }]);
