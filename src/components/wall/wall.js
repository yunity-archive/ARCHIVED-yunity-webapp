import angular from 'angular';

import template from 'ngtemplate!./wall.html';

angular.module('yunity').directive('wall', () => {
    console.log('wally');
    return  {
        templateUrl: template,
    }
})