'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {
      $routeProvider.
        when('/', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/');
        $locationProvider.html5Mode(true)  
    }
  ]);
