angular.module('starships', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: '/',
    // template: '<div>Home State!</div>'
    templateUrl: 'app/views/home/home.html'
  }).state('ships', {
    url: '/ships',
    // template: '<div>Ships State!</div>'
    templateUrl: 'app/views/ships/ships.html',
    controller: 'shipsCtrl'        
  }).state('ship', {
    url: '/ships/:id',
    // template: '<div>Single Ship State!</div>'
    templateUrl: 'app/views/ship/ship.html',
    controller: 'shipCtrl'
        
  })

  $urlRouterProvider.otherwise('/');
})