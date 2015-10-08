import angular from 'angular';

import templateUrl from 'ngtemplate!./map-pane.html';

angular.module('yunity').directive('mapPane', () => {

    return  {
        restrict: 'E',
        templateUrl: templateUrl,
        controller: ($scope) => {

            let state = {
                showSubnav: false
            }

            $scope.state = state;
            $scope.toggleSubnav = () => {
                state.showSubnav = !state.showSubnav;
            }
        },
        link: ($scope, element, attrs) => {
            $scope.$parent.updateMap(attrs.display);
        }
    }
});
