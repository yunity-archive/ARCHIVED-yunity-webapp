var templates = {
    post: require('ngtemplate!./post-panel.html'),
    crowdsourcing: require('ngtemplate!./crowdsourcing-panel.html'),
    question: require('ngtemplate!./question-panel.html'),
};

angular.module('yunity').directive('mainTabs', function () { return {
    restrict: 'A',
    template: require('./main-tabs.html'),
    controller: function ($scope, $http) {

        $scope.searchResults = [];

        $scope.$on("displaySearchResult", function (event, args) {
            $scope.tabs[1].active = "true";
            $scope.searchResults = args.result;
            console.log(args.result);
        });

        $scope.tabs = [
            {
                title: 'Post',
                templateUrl: templates.post
            },
            {
                title: 'Crowdsourcing',
                templateUrl: templates.crowdsourcing
            },
            {
                title: 'Ask a question',
                templateUrl: templates.question
            }
        ];
        $scope.tabs[0].active = "true";


        $http.get('http://localhost:3000/db').
            then(function (response) {
                $scope.foodbaskets = response.data;  //retrieve results and add to existing results
            });
    }}
});
