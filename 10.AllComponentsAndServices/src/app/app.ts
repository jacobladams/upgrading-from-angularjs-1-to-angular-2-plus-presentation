import * as angular from 'angular';

import 'angular-route';

var app = angular.module('personnelDirectory', ['ngRoute']);

app.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/personnel', {
        template: '<personnel-list></personnel-list>'
      })
      .when('/personnel/:id', {
        template: '<personnel-details></personnel-details>'
      })
      .when('/help', {
        template: '<help></help>'
      })
      .otherwise({
        redirectTo: '/personnel'
      });
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
  }
]);
