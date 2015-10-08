import angular from 'angular';

import template from 'ngtemplate!./wall.html';

angular.module('yunity').directive('wall', () => {

    return  {
        restrict: 'A',
        templateUrl: template,
        controller: ($scope) => {
            $scope.posts = [
                {body: 'post 1'},
                {body: 'post 2'},
            ]
        }
    }
})