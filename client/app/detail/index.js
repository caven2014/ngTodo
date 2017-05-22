'use strict';

import angular from 'angular';
import routes from './detail.routes';
import DetailController from './detail.controller';

export default angular.module('ngFullApp.detail', ['ngFullApp.auth', 'ui.router'])
  .config(routes)
  .controller('DetailController', DetailController)
  .name;
