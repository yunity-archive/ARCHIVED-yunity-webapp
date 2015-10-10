import angular from 'angular';

import templateUrl from 'ngtemplate!./chat-summary.html';

angular.module('yunity').directive('chatSummary', () => {

    return  {
        restrict: 'E',
        scope: {},
        templateUrl: templateUrl,
        controller ($scope, yAPI, yChat) {

            let state = {
                chats: [],
            };

            yAPI.apiCall({
                uri: '/chats',
            }).then((data) => {
                state.chats = data.data.chats;
            });

            // TODO: need to be able to listen to all chats and
            // update accordingly.
            yChat.listen(5, (msgs) => {
                console.log(msgs);
            });

            $scope.state = state;
        },
        link ($scope, element, attrs) {

        }
    }
});
