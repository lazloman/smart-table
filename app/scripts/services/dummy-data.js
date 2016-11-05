(function() {
  'use strict';

  angular.module('angularPrototypeApp')
    .factory('DummyData', function () {

      var DummyData = {};

      DummyData.generateData = function (count) {

        var firstnames = ['Laurent', 'Blandine', 'Francoise', 'Yves', 'Yvonne', 'Marie', 'Jean', 'Maxine', 'Antoine', 'Alexandre', 'Jessica', 'Lucile'];
        var lastnames = ['Renard', 'Faivre', 'Frere', 'LeFebvre', 'Dubois', 'Moreau', 'Bertrand', 'Guerin', 'Mathieu', 'DuFour'];
        var balance = [102, -2323.22, 42343, -15, 400, 875, 23, 456, -908, 1100, 5000, -15];
        var emails = ['whatever@gmail.com', 'oufblandou@gmail.com', 'raymondef@gmail.com', 'bogus@nowhere.com', 'unreal@underground.com', 'spam@spam.com'];

        var data = [];

        for (var index = 0; index < count; index++) {

          var obj = {};

          obj.firstName = firstnames[Math.floor((Math.random() * firstnames.length))];
          obj.lastName = lastnames[Math.floor((Math.random() * lastnames.length))];
          obj.balance = balance[Math.floor((Math.random() * balance.length))];
          obj.email = emails[Math.floor((Math.random() * emails.length))];

          data.push(obj);
        }
        return data;
      };

      return DummyData;
    });
})();
