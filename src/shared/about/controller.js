angular.module('yunity').controller('AboutCtrl', [ '$scope', '$modal', function($scope, $modal) {

    $scope.open = function (size) {

        var ModalInstance = $modal.open({
          animation: true,
          templateUrl: 'assets/templates/about.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    }
}]);

angular.module('yunity').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $ModalInstance, items) {

  $scope.ok = function () {
    $ModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $ModalInstance.dismiss('cancel');
  };
}]);

/*AboutCtrl.directive('about_page', function () {
    return {
        restrict: 'A',
        templateUrl: 'src/shared/about/about.html',
        controller: function($scope, $translate) {
            $scope.changeLang = function (key) {
                    $translate.use(key);
            }
        }
    };
});*/