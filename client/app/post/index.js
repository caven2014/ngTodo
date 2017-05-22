'use strict';

import angular from 'angular';
import routes from './post.routes';
import PostController from './post.controller';

export default angular.module('ngFullApp.post', ['ngFullApp.auth', 'ui.router'])
  .config(routes)
  .controller('PostController', PostController)
  .name;
