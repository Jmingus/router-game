(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Router = Backbone.Router.extend({
  routes: {
    'loading': 'loadingScreen',
    'home': 'menuScreen',
    'play': 'playScreen',
    'leaderboard': 'leaderboardScreen',
    'settings': 'settingsScreen'
  },
  loadingScreen: function loadingScreen() {
    $('section').hide();
    $('#loadingScreen').show();
    $('#loadingScreen > div').animate({ 'width': '100%' }, 4000);
  },
  menuScreen: function menuScreen() {
    $('section').hide();
    $('#menuScreen').show();
  },
  playScreen: function playScreen() {
    $('section').hide();
    $('#playScreen').show();
  },
  leaderboardScreen: function leaderboardScreen() {
    $('section').hide();
    $('#leaderboardScreen').show();
  },
  settingsScreen: function settingsScreen() {
    $('section').hide();
    $('#settingsScreen').show();
  }
});

var page = new Router();
Backbone.history.start();

window.onload = function () {
  page.navigate('loading', { trigger: true });
  window.setTimeout(function () {
    page.navigate('home', { trigger: true });
  }, 4000);
};

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map