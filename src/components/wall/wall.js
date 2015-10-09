import angular from 'angular';

import template from 'ngtemplate!./wall.html';

angular.module('yunity').directive('wall', () => {

    return  {
        restrict: 'A',
        templateUrl: template,
        controller: ($scope) => {
            $scope.posts = [
                {body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, deserunt non eos illo quibusdam similique, doloremque, hic possimus incidunt est consequatur, cumque. Amet eos id tenetur labore nam officia itaque?'},
                {body: 'post 2'},
            ]
        }
    }
})