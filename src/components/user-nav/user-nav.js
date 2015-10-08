import angular from 'angular';

import template from 'ngtemplate!./user-nav.html';

angular.module('yunity').directive('userNav', () => {

    return  {
        restrict: 'A',
        templateUrl: template,
        controller: ($scope) => {

            let state = {
                showSubnav: false
            }

            $scope.state = state;
            $scope.toggleSubnav = () => {
                state.showSubnav = !state.showSubnav;
            }
        }
    }
})