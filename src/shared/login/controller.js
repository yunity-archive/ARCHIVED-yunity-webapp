var angular = require('angular');

angular.module('yunity').controller('loginCtrl', ['$scope', 'yunityAPI', function($scope, yunityAPI) {

        var email = "";
        var password = "";

        var submit = function() {
            console.log("Login with ", email, " and ", password);
        }

    }]);