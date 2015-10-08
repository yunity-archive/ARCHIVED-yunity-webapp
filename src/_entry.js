import './assets/less/main.less';
import './assets/less/main-panels.less';

import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-translate';

import 'yunity-webapp-common/api';
import 'yunity-webapp-common/map';
import 'yunity-webapp-common/translate';
//import yunityChat from 'yunity-webapp-common/chat'; //does not work yet

import './app';
import './routes';

import './components/about/controller';
import './components/main-panels/main-panels';
import './components/globalController';
import './components/search/controller';
import './components/sidebar/controller';
import './components/category-filter/controller';
import './shared/login/controller';
import './shared/about/controller';
import '../node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files';
//require('../node_modules/yunity-webapp-common/api');