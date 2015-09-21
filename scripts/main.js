'use strict';
var Router = Backbone.Router.extend({
  routes: {
    'loading': 'loadingScreen',
    'home': 'menuScreen',
    'play': 'playScreen',
    'leaderboard': 'leaderboardScreen',
    'settings': 'settingsScreen'
  },
  loadingScreen: function(){

  },
  menuScreen: function(){

  },
  playScreen: function(){

  },
  leaderboardScreen: function(){

  },
  settingsScreen: function(){

  }
})

var page = new Router();
Backbone.history.start();
