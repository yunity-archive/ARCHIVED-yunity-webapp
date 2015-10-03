var homeTemplate = require('ngtemplate!./home.html');
var aboutTemplate = require('ngtemplate!../about/about.html');
var searchTemplate = require('ngtemplate!../search/search.html');
var profileTemplate = require('ngtemplate!../profile/profile.html');



angular.module('yunity').controller('mainCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

        $scope.searchResults = [];

        $scope.$on("displaySearchResult", function (event, args) {
            $scope.tabs[1].active = "true";
            $scope.searchResults = args.result;
            console.log(args.result);
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
        $scope.tabs[0].active = "true";


        $http.get('http://localhost:3000/db').
            then(function (response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            });

    }]);
