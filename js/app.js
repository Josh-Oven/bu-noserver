angular.module('bu', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('home', {
        url: '/',
        templateUrl: '../views/homeTmplt.html'
     })
     .state('text', {
        url: '/text',
        templateUrl: './views/textTmplt.html'
     })

    $urlRouterProvider.otherwise('/')

})
