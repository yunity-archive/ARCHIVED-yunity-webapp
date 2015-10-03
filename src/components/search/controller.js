angular.module('yunity').controller('searchCtrl', ['$scope', '$rootScope', '$http', ($scope, $rootScope, $http) => {

    $scope.list = [];


    $scope.submit = () => {
        if ($scope.searchTag) {
            var params = {address: $scope.searchTag, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then( res => {
                    $scope.list = res.data.results;
                    $rootScope.$broadcast("displaySearchResult", {result: $scope.list});
                });

        }
    };


        $scope.getSearch = viewValue => {
            var params = {address: viewValue, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then( res => {
                    return res.data.results;
                });
        };
    }
    ])
    ;
