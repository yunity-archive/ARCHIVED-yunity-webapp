var angular = require('angular');
var homeTemplate = require('ngtemplate!./home.html');

angular.module('yunity').controller('mainCtrl', [
    '$scope','$rootScope', '$http', 'foodbasketsPayload',
    function ($scope,$rootScope, $http, foodbasketsPayload) {

        // $scope.foodbaskets = [];
        $scope.foodbaskets = foodbasketsPayload;
        $rootScope.searchResults = [];

        $rootScope.$on("displaySearchResult", function (event, args) {
            $scope.tabs.activeTab = "Search";
            $rootScope.searchResults = args.result;
        });

        $scope.tabs = [
            {
                title: 'Home',
                template: homeTemplate

            },
            {title: 'Search', template: 'foo.html', content:'content'},
            {
                title: 'Profile',
                content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.',
                template: 'foo.html'
            },
            {
                title: 'About',
                content: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade.',
                template: 'foo.html'
            }
        ];
        $scope.tabs.activeTab = "Home";


        $http.get('http://localhost:3000/db').
            then(function (response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            });

    }]);
