'use strict';

export default class DetailController {
  /*@ngInject*/
  constructor($http, $stateParams) {
    console.log($stateParams.id)
    this.$http = $http;
    this.thingId = $stateParams.id;
    this.thingDetail = null;
  }

  $onInit() {
    var self  = this;
    this.$http.get(`/api/things/${ this.thingId }`)
      .then(response => {
        console.log(response.data)
        self.thingDetail = response.data;
        // this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }
}
