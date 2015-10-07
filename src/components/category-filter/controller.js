angular.module('yunity').directive('categoryFilter', () => {
    return {
        restrict: 'A',
        template: require('./category-filter.html'),
        controller: function($scope, $http) {
        }
    }
});