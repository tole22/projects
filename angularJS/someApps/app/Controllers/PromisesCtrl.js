'use strict';

angular.module('myApp.promises', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/promises', {
      templateUrl: 'views/promises.html',
      controller: 'PromiseCtrl'
    });
  }])
    .controller('PromiseCtrl', ['$scope', '$q', function ($scope, $q) {
        var checkServer = function () {
            var def = $q.defer();
            setTimeout(function () {
                def.resolve('Online');
            }, 2000);
            return def.promise;
        };

        var checkHTTP = function () {
            var def = $q.defer();
            setTimeout(function () {
                if (Math.floor(Math.random() * 100) > 50) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no está disponible');
                };
            }, 5000)
            return def.promise;
        }

        var checkDb = function () {
            var def = $q.defer();
            setTimeout(function () {
                if (Math.floor(Math.random() * 100) > 50) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no está disponible');
                };
            }, 3000)
            return def.promise;
        }

        var checkSsl = function () {
            var def = $q.defer();
            setTimeout(function () {
                def.notify('Comprobación de conexión segura iniciada.');
                if (Math.floor(Math.random() * 100) > 50) {
                    def.notify('Las conexiones seguras están habilitadas');
                    def.resolve('SSL');
                } else {
                    def.notify('Las conexiones seguras están desactivadas');
                    def.reject('Desactivadas');
                };
            }, 4000)
            return def.promise;
        }

        checkServer().then(function (result) {
            $scope.status = result;
        });
        checkHTTP().then(function (result) {
            $scope.http = result;
        }, function (err) {
            $scope.http = err;
        });
        checkDb().then(function (result) {
            $scope.db = result;
        }, function (err) {
            $scope.db = err;
        });
        checkSsl().then(function (result) {
            $scope.ssl = result;
        }, function (err) {
            $scope.ssl = err;
        }, function (notif) {
            console.log(notif);
        });

    }])