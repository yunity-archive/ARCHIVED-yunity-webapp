var angular = require('angular');
require('angular-ui-router');

(function () {

    function staticURL (uri) {
        return uri;
    }

    var yunity = angular.module('yunity', [
        'ui.router',
    ]);

    yunity.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: staticURL('home.html'),
                resolve: {},
            })
            .state('about', {
                url: '/about',
                templateUrl: staticURL('about.html'),
                controller: 'SampleController',
                resolve: {
                    someHTML: function ($http) {
                        return $http.get('http://localhost:8000/api/login');
                    },
                    aNumber: function() { return 42 },
                },
            })
    });

}());
