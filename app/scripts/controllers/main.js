(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name angularPrototypeApp.controller:angularPrototypeAppController
   * @description
   * # MainCtrl
   * Controller of the angularPrototypeApp
   */
  function angularPrototypeAppController($scope, $uibModal, DummyData) {
    /*jshint validthis: true */
    this.displayedCollection = [];
    this.rowCollection = DummyData.generateData(11);
    this.itemsByPage = 5;
    this.dataSetSize = this.rowCollection.length;
    this.displayedPages = Math.ceil(this.dataSetSize / this.itemsByPage);
    this.$uibModal = $uibModal;
    this.newObj = {};
    this.scope = $scope;
  }

  angularPrototypeAppController.prototype.addNewItem = function () {
    this.newObj = {};
    this.modalInstance = this.$uibModal.open({
      templateUrl: 'views/directives/addNewItem.html',
      scope: this.scope
    });
  };

  angularPrototypeAppController.prototype.ok = function (form) {

    if(!form.$valid){
      return;
    }

    this.modalInstance.close(this.scope);
    this.rowCollection.unshift(this.newObj);
    this.dataSetSize++;
    this.displayedPages = Math.ceil(this.dataSetSize / this.itemsByPage);
  };


  angularPrototypeAppController.prototype.cancel = function () {
    this.modalInstance.dismiss('cancel');
  };

  angularPrototypeAppController.prototype.removeRow = function(row){

    this.displayedCollection.splice(this.displayedCollection.indexOf(row), 1);
    this.dataSetSize--;
    this.displayedPages = Math.ceil(this.dataSetSize / this.itemsByPage);
  };

  angular.module('angularPrototypeApp')
    .controller('MainCtrl', angularPrototypeAppController);
})();
