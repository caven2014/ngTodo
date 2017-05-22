'use strict';

export default class PostController {
  /*@ngInject*/

  newThing = '';
  infoThing = '';

  constructor($http, $state, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  $onInit() {

  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing,
        info: this.infoThing
      }).then(() => {
        // redirect to home
        this.$state.go('main');
      })
      this.newThing = '';
      this.infoThing = '';
    }
  }
}
