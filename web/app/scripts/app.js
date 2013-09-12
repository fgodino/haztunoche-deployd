'use strict';

var app = angular.module('webApp', ['ngResource']);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      requireLogin: true
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      requireLogin: false
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl',
      requireLogin: false
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('SessionService', function($resource) {
  return $resource('http://localhost\\:2403/discouser/login');
});


