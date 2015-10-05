
angular.module('yunity').directive('mainPanels', function () { return {
    template: require('./main-panels.html'),
    controller: function ($scope, $http) {

        $scope.searchResults = [];

        $scope.$on("displaySearchResult", function (event, args) {
            $scope.tabs[1].active = "true";
            $scope.searchResults = args.result;
            console.log(args.result);
        });

        $scope.tabs = [
            {
                title: 'Home',
            },
            {
                title: 'Search',
            },
            {
                title: 'Profile',
            }
        ];
        $scope.tabs[0].active = "true";


        $http.get('http://localhost:3000/db').
            then(function (response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            });
    }}
});
