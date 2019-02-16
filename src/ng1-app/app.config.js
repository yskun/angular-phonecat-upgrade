'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('')
      $routeProvider.
        when('/', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise({
          template: ''
        });
    }
  ]);
