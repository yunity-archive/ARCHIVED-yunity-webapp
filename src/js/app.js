var angular = require('angular');
require('angular-ui-router');

(function () {

    function staticURL (uri) {
        return uri;
    }

    var yunity = angular.module('yunity', [
        'ui.router',
    ]);

    yunity.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

        this.isWide = false;

        $scope.foodbaskets = [];


        $http.get('http://localhost:3000/db').
            then(function(response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
                console.log(response);
        });

    }]);

    yunity.controller('mapCtrl', ['$scope', '$http', function($scope, $html) {
        // do something here...
    }]);

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
          .state('map', {
                url: '/',
                templateUrl: staticURL('home.html'),
                resolve: {},
            })
    });

}());
