'use strict'

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('post', {
    url: '/post/:id',
    template: require('./post.pug'),
    controller: 'PostController',
    controllerAs: 'post',
    authenticate: 'post'
  })
}
