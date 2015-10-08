import angular from 'angular';

angular.module('yunity').config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/main/valuables');

    $stateProvider
        .state('main', {
            abstract: true,
            views: {
                main: {
                    template: '<main-panels/>',
                },
            }
        })
        .state('main.valuables', {
            url: '/main/valuables',
            template: 'valuables',
        })
        .state('main.crowdsourcing', {
            url: '/main/crowdsourcing',
            template: 'crowdsourcing',
        })
        .state('profile', {
            url: '/profile',
            views: {
                main: {
                    template: 'profile page',
                },
                sidebar: {
                    template: "profile sidebar"
                },
                map: {
                    template: ' ',
                },
            }
        })
        .state('about', {
            url: '/about',
            template: require('../src/components/about/about.html'),
            controller: 'AboutCtrl',
            resolve: {
                // someHTML: function ($http) {
                //     return $http.get('http://localhost:8000/api/login');
                // },
                aNumber: () => { return 42 },
            },
        })
});
