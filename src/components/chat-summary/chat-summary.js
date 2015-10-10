import angular from 'angular';

import templateUrl from 'ngtemplate!./chat-summary.html';

angular.module('yunity').directive('chatSummary', () => {

    return  {
        restrict: 'E',
        scope: {},
        templateUrl: templateUrl,
        controller ($scope, yChat) {

            let state = {
                chats: [],
            }

            $scope.state = state;
        },
        link ($scope, element, attrs) {
            console.log($scope);
        }
    }
});
