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
    this.rowCollection = [];
    this.safeCollection = DummyData.generateData(22);
    this.itemsByPage = 5;
    this.dataSetSize = this.safeCollection.length;
    this.displayedPages = Math.ceil(this.dataSetSize / this.itemsByPage);
    this.$uibModal = $uibModal;
    this.newObj = {};

    this.scope = $scope;
  }

  angularPrototypeAppController.prototype.addNewItem = function () {
    this.modalInstance = this.$uibModal.open({
      templateUrl: 'views/directives/addNewItem.html',
      scope: this.scope
    });
  };

  angularPrototypeAppController.prototype.ok = function (form) {

    if(!form.$valid){
      return;
    }

    this.rowCollection.unshift(this.newObj);
    this.modalInstance.close(this.scope);
  };

  angularPrototypeAppController.prototype.cancel = function () {
    this.modalInstance.dismiss('cancel');
  };

  angularPrototypeAppController.prototype.removeRow = function(row){
    this.rowCollection.splice(this.rowCollection.indexOf(row), 1);
    this.dataSetSize--;
    this.displayedPages = Math.ceil(this.dataSetSize / this.itemsByPage);
  };

  angular.module('angularPrototypeApp')
    .controller('MainCtrl', angularPrototypeAppController);
})();
