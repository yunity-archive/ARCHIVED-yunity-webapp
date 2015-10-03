
(function (angular) {
    angular.module('yunity').controller('SampleController', function(
        $scope,
        // someHTML,
        aNumber
    ) {
        $scope.state = {
            // foodsharingHTML: someHTML,
            aNumber: aNumber,
        };
    })
}(window.angular))
