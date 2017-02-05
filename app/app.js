'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://slack.firebaseio.com/')
  .config(function(){
    var config = {
      apiKey: "AIzaSyAGftWOQ3AuboJ2FSztVFEcUXjV1CZHdLI",
      authDomain: "thinkster-angularfire.firebaseapp.com",
      databaseURL: "https://thinkster-angularfire.firebaseio.com",
      storageBucket: "thinkster-angularfire.appspot.com",
      messagingSenderId: "568558983844"
    }
  });
