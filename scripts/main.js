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
    $('section').hide();
    $('#loadingScreen').show()
    $('#loadingScreen > div').animate({'width' : '100%'},4000)
  },
  menuScreen: function(){
    $('section').hide();
    $('#menuScreen').show()
  },
  playScreen: function(){
    $('section').hide();
    $('#playScreen').show()
  },
  leaderboardScreen: function(){
    $('section').hide();
    $('#leaderboardScreen').show()
  },
  settingsScreen: function(){
    $('section').hide();
    $('#settingsScreen').show()
  }
})

var page = new Router();
Backbone.history.start();

window.onload = function(){
  page.navigate('loading', {trigger: true});
  window.setTimeout(function(){
    page.navigate('home', {trigger: true})},4000);
}
