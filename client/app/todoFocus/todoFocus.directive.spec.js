'use strict';

describe('Directive: todoFocus', function() {
  // load the directive's module and view
  beforeEach(module('ngTodoApp.todoFocus'));
  beforeEach(module('app/todoFocus/todoFocus.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<todo-focus></todo-focus>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the todoFocus directive');
  }));
});
