'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp').constant('companies', [
  {'name':'IBM'},
  {'name':'Apple'},
  {'name':'Cisco'},
]);

angular.module('myApp').controller('mainController', function($scope, $route, storageService) {
  $scope.$route = $route;
  $scope.tabs = [
    {'title':'General Information','template':'view1/view1.html'},
    {'title':'Corrective Actions','template':'view2/view2.html'},
    {'title':'REVIEW and SUBMIT','template':'view3/view3.html'}
  ];

  storageService.addData('test');
});

angular.module('myApp').factory('wells', function wellsFactory() {
  // here we could use $http or $httpResourcess
  wellsFactory.get = function() {
    return [
      {'id':1,'name':'Well-01','region':'South','state':'Oklahoma','fieldoffice':'Ringwood'},
      {'id':2,'name':'Well-02','region':'North','state':'Montana','fieldoffice':'Sidney'},
      {'id':3,'name':'Well-03','region':'North','state':'North Dakota','fieldoffice':'Tioga'},
    ];
  };

  return wellsFactory;
});

angular.module('myApp').service('storageService', function(){
  var info = [];

  var addData = function(data) {
    info.push(data);
  };

  var getData = function() {
    return info;
  };

    return {
        addData: addData,
        getData: getData
    };
});