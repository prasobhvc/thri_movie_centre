(function() {
  'use strict';

  angular
    .module('movieCentre')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
            abstract: true,
            url: "/",
            templateUrl: "app/home.html"
        })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('search', {
        url: '/',
        templateUrl: 'app/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
