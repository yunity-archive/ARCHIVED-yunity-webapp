angular.module('yunity').directive('sidebarComunities', () => {
    return {
        restrict: 'A',
        template: require('./sidebarComunities.html'),
        controller: function($scope, $http) {
        }

        }
});

angular.module('yunity').directive('sidebarGroups', () => {
    return {
        restrict: 'A',
        template: require('./sidebarGroups.html'),
        controller: function($scope, $http) {
        }

    }
});


angular.module('yunity').directive('sidebarEvents', () => {
    return {
        restrict: 'A',
        template: require('./sidebarEvents.html'),
        controller: function($scope, $http) {
        }

    }
});