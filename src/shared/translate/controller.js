var angular = require("angular");

angular.module('yunity').config(function ($translateProvider) {
	
	$translateProvider.translations('de_DE', {
    	APP_HEADLINE:  'Großartige AngularJS App',
    	NAV_HOME:      'Zur Startseite',
    	NAV_ABOUT:     'Über',
    	APP_TEXT:      'Irgendein Text über eine großartige AngularJS App.',
    	GREETING: 	   'Hallo, mein Name ist {{name}}'
	});

	$translateProvider.translations('en_US', {
    	APP_HEADLINE:  'Awesome AngularJS App',
    	NAV_HOME:      'Start',
    	NAV_ABOUT:     'About',
    	APP_TEXT:      'Some text about the awesome AngularJS app.',
    	GREETING: 	   'Hello, my name is {{name}}'
	});

	$translateProvider.determinePreferredLanguage();
  $translateProvider.useSanitizeValueStrategy('sanitize'); // http://angular-translate.github.io/docs/#/guide/19_security
});

angular.module('yunity').controller('LangCtrl', function ($scope, $translate) {

  $scope.changeLang = function (key) {
    $translate.use(key).then(function (key) {
      console.log("Sprache zu " + key + " gewechselt.");
    }, function (key) {
      console.log("Irgendwas lief schief.");
    });
  };
});
