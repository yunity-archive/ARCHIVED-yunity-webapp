import angular from 'angular';
import 'angular-ui-bootstrap';;
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-translate';
import yunityAPI from 'yunity-webapp-common/api';
import yunityMap from 'yunity-webapp-common/map';
import yunityTranslate from 'yunity-webapp-common/translate';
//import yunityChat from 'yunity-webapp-common/chat'; //does not work yet

{

    let staticURL = (uri) => {
        return uri;
    }

     let yunity = angular.module('yunity', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'yunityAPI',
        'yunityMap',
        'yunityTranslate'
    ]);

    yunity.config(($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise('/main/valuables');

        $stateProvider
            .state('main', {
                abstract: true,
                template: '<main-panels/>',
                onEnter: ($state) => {
                    console.log('hi');
                    // $state.go('main.valuables');
                }
            })
            .state('main.valuables', {
                url: '/main/valuables',
                template: 'valuables',
            })
            .state('main.crowdsourcing', {
                url: '/main/crowdsourcing',
                template: 'crowdsourcing',
            })
            .state('about', {
                url: '/about',
                template: require('../src/components/about/about.html'),
                controller: 'AboutCtrl',
                resolve: {
                    // someHTML: function ($http) {
                    //     return $http.get('http://localhost:8000/api/login');
                    // },
                    aNumber: () => { return 42 },
                },
            })
    });

}
