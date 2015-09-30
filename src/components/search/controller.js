var angular = require('angular');


angular.module('yunity').controller('searchCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

    $scope.list = [];


    $scope.submit = function () {
        if ($scope.searchTag) {
            var params = {address: $scope.searchTag, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then(function (res) {
                    $scope.list = res.data.results;
                    $rootScope.$broadcast("displaySearchResult", {result: $scope.list});
                });

        }
    };


        $scope.getSearch = function (viewValue) {
            var params = {address: viewValue, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then(function (res) {
                    return res.data.results;
                });
        };
    }
    ])
    ;