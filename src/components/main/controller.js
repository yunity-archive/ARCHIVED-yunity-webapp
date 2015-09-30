var angular = require('angular');
var homeTemplate = require('ngtemplate!./home.html');
var aboutTemplate = require('ngtemplate!../about/about.html');
var searchTemplate = require('ngtemplate!../search/search.html');
var profileTemplate = require('ngtemplate!../profile/profile.html');


angular.module('yunity').controller('mainCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

        $scope.searchResults = [];

        $scope.$on("displaySearchResult", function (event, args) {
            $scope.tabs.activeTab = "Search";
            $scope.searchResults = args.result;
        });

        $scope.tabs = [
            {
                title: 'Home',
                template: homeTemplate

            },
            {
                title: 'Search',
                template: searchTemplate
            },
            {
                title: 'Profile',
                template: profileTemplate
            }
        ];
        $scope.tabs.activeTab = "Home";


        $http.get('http://localhost:3000/db').
            then(function (response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            });

    }]);
