"use strict";

angular
  .module("myApp.playlist", ["ngRoute"])

  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/playlist", {
        templateUrl: "playlist/playlist.html",
        controller: "PlaylistCtrl"
      });
    }
  ])

  .controller("PlaylistCtrl", [
    "$scope",
    "Playlist",
    function($scope, Playlist) {
      $scope.playlist = Playlist.list();
      $scope.deleteFromPlaylist = function(id) {
        Playlist.deleteItem(id);
      };
    }
  ]);
