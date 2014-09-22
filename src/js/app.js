'use strict';

(function() {
  var app = angular.module('angular-app', []);

  app.config(function($stateProvider, $urlRouteProvider){
    $stateProvider.state('app', {});

    $urlRouteProvider.otherwise('/');
  });
})();
