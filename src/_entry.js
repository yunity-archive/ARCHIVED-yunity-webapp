import './assets/less/vars.less';
import './assets/less/style.less';
import './assets/less/main.less';

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

import './components/about/about';
import './components/category-filter/category-filter';
import './components/chat-summary/chat-summary.js';
import './components/chat-summary/chat-summary.less';
import './components/globalController';
import './components/main-tabs/main-tabs';
import './components/map-pane/map-pane';
import './components/search/search';
import './components/sidebar/sidebar';
import './components/profile/profile.js';
import './components/profile/profile.less';
import './components/user-nav/user-nav.js';
import './components/user-nav/user-nav.less';
import './components/wall/wall';

import './shared/services/searchService';
import './shared/login/controller';
import './shared/about/controller';
import '../node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files';
//require('../node_modules/yunity-webapp-common/api');