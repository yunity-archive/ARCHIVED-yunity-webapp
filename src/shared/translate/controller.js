var angular = require("angular");

angular.module('yunity').config(function ($translateProvider) {
	
	$translateProvider.translations('de_DE', {
    	ENGLISH:    "Englisch",
      GERMAN:     "Deutsch",
      SWITCH_LANGUAGE:"Sprache wechseln",
      ABOUT_PAGE: "Über uns",
      TOGGLE_MAP: "Karte umschalten",
      SEARCH:     "Suchen",
      GO:         "Los!",
      HOME_PAGE:  "Start",
      SEARCH_PAGE:"Suche",
      PROFILE:    "Profil",
      AWESOME:    "Großartig!!",
      SEARCH_RESULTS:"Suchergebnisse"
	});

	$translateProvider.translations('en_US', {
    	ENGLISH:    "English",
      GERMAN:     "German", 
      SWITCH_LANGUAGE:"Switch language",
      ABOUT_PAGE: "About Page",
      TOGGLE_MAP: "Toogle Map",
      SEARCH:     "Search",
      GO:         "Go!",
      HOME_PAGE:  "Home",
      SEARCH_PAGE:"Search",
      PROFILE:    "Profile",
      AWESOME:    "Awesome!!",
      SEARCH_RESULTS:"Search results"
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
