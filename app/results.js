'use strict';

angular.module('resultsApp', []);

angular.module('resultsApp').controller('mainController', function($scope) {
    $scope.data = JSON.parse(sessionStorage['data']);
});