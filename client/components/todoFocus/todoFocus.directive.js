'use strict';
const angular = require('angular');

export default angular.module('ngTodoApp.todoFocus', [])
  .directive('todoFocus', function ($timeout) {
    'use strict';
    return function (scope, elem, attrs) {
      scope.$watch(attrs.todoFocus, function (newVal) {
        if (newVal) {
          $timeout(function () {
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  })
  .name;
