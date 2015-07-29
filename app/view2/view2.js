'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $rootScope, companies) {
      console.log($rootScope.data)

      $scope.companies = companies;

      $scope.addRow = function() {
        if($scope.rows === undefined) {
          $scope.rows = [];
        }
        if($scope.rows.length < 5) {
          $scope.rows.push({'edit':true});
        }
      };

      $scope.finishEdit = function(index) {
        index.edit = false;
      };

      $scope.removeRow = function(index) {
          $scope.rows.splice(index, 1);
      };
});