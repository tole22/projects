'use strict';

/**
 * @ngdoc overview
 * @name initAppApp
 * @description
 * # initAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('initAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/checkIN.html',
        controller: 'controller'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.controller("controller", function ($scope) {
  var list = this;


  list.products = [
    { id: 1, name: "water", price: 20.0 },
    { id: 2, name: "oil", price: 31.0 },
    { id: 3, name: "bread", price: 120.0 },
    { id: 4, name: "milk", price: 22.0 }
  ];
  var n;
  var nCart = 1;
  list.cart = [];

  list.addProduct = function () {
    var name = list.name;
    var price = list.price;
    n = list.products.length;

    if (name != "" && price != "" && !isNaN(price)) {
      n++;
      list.products.push({ id: n, name: name, price: price });
      console.log(list.products);
      list.name = '';
      list.price = '';
    }
  }

  list.addToCart = function () {
    var id = list.selectedProduct;
    var count = list.count;
    var product = list.products.find(function (obj) {
      return obj.id == id;
    });

    if (product != undefined && count > 0) {
      list.cart.push({ id: n, name: product.name, price: product.price, count: count, total: product.price * count });
      nCart++;
    }
  }

  list.getTotalCart = function () {
    var total = 0;
    list.cart.forEach(x => {
      total += x.total;
    });
    return total;
  }
});