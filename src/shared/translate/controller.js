var angular = require("angular");

angular.module('yunity').config(function ($translateProvider) {
	
  $translateProvider.useStaticFilesLoader({
    prefix: 'lang-',
    suffix: '.json'
  });
	
	$translateProvider.determinePreferredLanguage();
  $translateProvider.useSanitizeValueStrategy('sanitize'); // http://angular-translate.github.io/docs/#/guide/19_security
});

angular.module('yunity').controller('LanguageCtrl', function ($scope, $translate) {

  $scope.changeLang = function (key) {
    $translate.use(key).then(function (key) {
      console.log("Switched language to " + key + " .");
    }, function (key) {
      console.log("Something went wrong!");
    });
  };
});
