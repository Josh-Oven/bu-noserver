angular.module('bu', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('home', {
        url: '/',
        templateUrl: '../views/homeTmplt.html'
     })
     .state('text', {
        url: '/text/:id',
        templateUrl: './views/textTmplt.html',
        controller: 'textCtrl'
     })
     .state('directory', {
       url: '/directory/',
       templateUrl: './views/directoryTmplt.html',
       controller: 'menuCtrl'
     })

    $urlRouterProvider.otherwise('/')

})
