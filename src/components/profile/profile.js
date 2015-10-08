import angular from 'angular';

import templateUrl from 'ngtemplate!./profile.html';

angular.module('yunity').directive('userNav', () => {

    return  {
        restrict: 'E',
        templateUrl: templateUrl,
        controller: ($scope) => {

            let state = {
                showSubnav: false
            }

            let fakeUserInfo = {
                name: 'Paul',
                info: {
                    reliability: 96,
                    identityChecks: 18,
                    vouches: 82,
                    followers: [
                        {}, {}, {}, {}, {}, {}, {}
                    ]
                }
            }

            $scope.state = state;
            $scope.user = fakeUserInfo;
            $scope.toggleSubnav = () => {
                state.showSubnav = !state.showSubnav;
            }
        }
    }
})