/*
 * Controller for full-page functionality.
 * Let's keep this as minimal as possible!
 * No global state unless absolutely necessary!
 *
 * RESPONSIBILITIES:
 * - Controlling map display state, which is represented by a CSS
 *   class on the <body>. Can be either:
 *   - maximized: half the screen width
 *   - minimized: only a small slice is showing
 *   - hidden: does not show at all, no ability to maximize or minimize
 */

angular.module('yunity').controller('GlobalController', ['$scope', '$http', ($scope, $html) => {

    let hideMap = false;

    $scope.bodyClass = {
        'map-maximized': true,
    }

    $scope.updateMap = (display) => {
        // display can be either 'maximized', 'minimized', 'hidden'
        $scope.bodyClass = {
            'map-maximized': display === 'maximized',
            'map-minimized': display === 'minimized',
            'map-hidden': display === 'hidden',
        }
    }

    $scope.isUserLoggedIn = true;  // TODO: replace with auth service

    $scope.toggleMap = () => {
        console.log($scope.bodyClass);
        if ($scope.bodyClass['map-maximized']) {
            $scope.updateMap('minimized');
        } else if ($scope.bodyClass['map-minimized']) {
            $scope.updateMap('maximized');
        }
    };

}]);
