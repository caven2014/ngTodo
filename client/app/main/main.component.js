import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = '';
  infoThing = '';
  editedThing = '';
  originalThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing,
        info: this.infoThing
      });
      this.newThing = '';
      this.infoThing = '';
    }
  }

  editThings(thing) {
    this.editedThing = thing;
		// Clone the original thing to restore it on demand.
		this.originalThing = angular.extend({}, thing);

  }
  saveEdit(thing) {
    var self = this;
    console.log(self.originalThing)
    console.log(thing)
    thing.name = thing.name.trim();
    if (thing.name === self.originalThing.name) {
			self.editedThing = null;
			return;
		}

    this.$http[thing.name? 'put': 'delete'](`/api/things/${thing._id}`, {
      name: thing.name
    })
    .finally(function () {
			self.editedThing = null;
		})
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('ngFullApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.pug'),
    controller: MainController
  })
  .name;
