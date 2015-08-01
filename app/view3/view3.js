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
    console.log(storageService.getData());
      $scope.data = storageService.getData();
});