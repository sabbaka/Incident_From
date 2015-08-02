'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl',
    activetab: 'view3'
  });
}])

.controller('View3Ctrl', function($scope, storageService) {
    $scope.usPhone = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;

      $scope.data = storageService.getData();

      $scope.sendData = function() {
          sessionStorage['data'] = JSON.stringify($scope.data);
          window.open('results.html');
      };
});