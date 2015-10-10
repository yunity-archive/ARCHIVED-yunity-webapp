import angular from 'angular';

import templateUrl from 'ngtemplate!./user-nav.html';

angular.module('yunity').directive('userNav', () => {

    return  {
        restrict: 'A',
        templateUrl: templateUrl,
        controller: ($scope) => {

            let state = {
                showSubnav: {}
            }

            $scope.state = state;
            $scope.toggleSubnav = (which) => {
                let next = !state.showSubnav[which];
                state.showSubnav = {
                    [which]: next
                };
            }
        }
    }
});
