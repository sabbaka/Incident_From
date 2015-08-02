'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    activetab: 'view1'
  });
}])

.controller('View1Ctrl', function($scope, $rootScope, companies, wells, storageService, $filter, $window) {
    $scope.data = storageService.getData()

    //$scope.data = new Object($scope.data);

    $scope.wellTypes = wells.get();

    $scope.companies = companies;


    //console.log(storageService.getData());

    //storageService.addData($scope.data);

});