'use strict'

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('detail', {
    url: '/detail/:id',
    template: require('./detail.pug'),
    controller: 'DetailController',
    controllerAs: 'detail',
    authenticate: 'detail'
  })
}
