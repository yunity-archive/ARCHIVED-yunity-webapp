angular.module('yunity').controller('mapCtrl', ['$scope', '$http', ($scope, $html) => {

        let hideMap = false;

        $scope.bodyClass = {
            'hide-map': hideMap
        };

        $scope.toggleMap = () => {
            hideMap = !hideMap;
            $scope.bodyClass['hide-map'] = !$scope.bodyClass['hide-map'];
        };

}]);
