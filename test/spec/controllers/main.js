'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should instantiate the main controller', function(){
    expect(MainCtrl).toBeDefined();
  });

  it('should populate the displayedCollection and rowCollection', function () {

    expect(MainCtrl.displayedCollection).toBeDefined();
    expect(MainCtrl.rowCollection.length).toBe(MainCtrl.dataSetSize);
  });

  it('should set itemsByPage', function(){
    expect(MainCtrl.itemsByPage).toBe(5);
  });

  it('should calculate displayedPages on init', function(){
    expect(MainCtrl.displayedPages).toBe(Math.ceil(MainCtrl.dataSetSize / MainCtrl.itemsByPage));
  });
});
