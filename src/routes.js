import angular from 'angular';

angular.module('yunity').config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            views: {
                main: {
                    template: require('./components/main/main.html'),
                },
            }
        })
        .state('profile', {
            url: '/profile',
            views: {
                main: {
                    template: 'profile page profile page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odit deleniti sed aspernatur quia dolorum repellat repudiandae itaque totam sequi iusto veritatis provident tempora aperiam, rem voluptatem, corporis natus ex.',
                },
                sidebar: {
                    template: "profile sidebar"
                },
                map: {
                    template: '<map-pane display="hidden"/>',
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
