/*
 * Controller for full-page functionality.
 * Let's keep this as minimal as possible!
 * No global state unless absolutely necessary!
 */

angular.module('yunity').controller('GlobalController', ['$scope', '$http', ($scope, $html) => {

    let hideMap = false;

    $scope.isUserLoggedIn = true;  // TODO: replace with auth service

    $scope.bodyClass = {
        'hide-map': hideMap
    };

    $scope.toggleMap = () => {
        hideMap = !hideMap;
        $scope.bodyClass['hide-map'] = !$scope.bodyClass['hide-map'];
    };

}]);
