var angular = require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-sanitize');
require('angular-strap');
require('angular-translate');

(function () {

    function staticURL (uri) {
        return uri;
    }

    var yunity = angular.module('yunity', [
        'ui.router','ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'pascalprecht.translate'
    ]);

    yunity.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                //template: require('../src/components/foodbaskets/foodbaskets.html'),
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
                template: require('../src/components/about/about.html'),
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
