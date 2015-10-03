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

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                //template: require('../src/components/foodbaskets/foodbaskets.html'),
                controller: 'mainCtrl',
                resolve: {
                    foodbasketsPayload: () => {
                        return [{
                            title: 'Banana basket',
                            description: 'fresh, bright yellow bananas',
                            user: {
                                name: 'Marcel'
                            },
                            position: {
                                name: 'Hawaii'
                            }
                        }]
                    }
                },
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
