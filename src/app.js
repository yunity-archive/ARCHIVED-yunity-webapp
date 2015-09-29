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
                url: '/',
                templateUrl: staticURL('src/components/foodbaskets/foodbaskets.html'),
                controller: 'mainCtrl',
                resolve: {
                    foodbasketsPayload: function() {
                        return [{
                            title: 'Banana basket',
                            description: 'fresh, bright yellow bananas',
                            user: {
                                name: 'Marcel'
                            },
                            position: {
                                name: 'Hawaii'
                            }
                        }]
                    }
                },
            })
            .state('about', {
                url: '/about',
                templateUrl: staticURL('src/components/about/about.html'),
                controller: 'SampleController',
                resolve: {
                    // someHTML: function ($http) {
                    //     return $http.get('http://localhost:8000/api/login');
                    // },
                    aNumber: function() { return 42 },
                },
            })
    });

}());
