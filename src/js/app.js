var angular = require('angular');
require('angular-ui-router');

(function () {

    function staticURL (uri) {
        return uri;
    }

    var yunity = angular.module('yunity', [
        'ui.router',
    ]);

    yunity.controller('mapCtrl', ['$scope', '$http', function($scope, $html) {
        // do something here...
    }]);

    yunity.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: staticURL('about.html'),
                controller: 'SampleController',
                resolve: {
                    // someHTML: function ($http) {
                    //     return $http.get('http://localhost:8000/api/login');
                    // },
                    aNumber: function() { return 42 },
                },
            })
          .state('home', {
                url: '/',
                templateUrl: staticURL('foodbaskets.html'),
                controller: 'mapCtrl',
                resolve: {},
            })
    });

}());
