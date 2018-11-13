"use strict";

var MyApp = angular.module("MyStore", []).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/store', {
      templateUrl: 'shopping_cart/store.html',
      controller: MyController
    }),
    when('/rings/:productId', {
      templateUrl: 'shopping_cart/product.html',
      controller: MyController
    }),
    when('/cart', {
      templateUrl: 'shopping_cart/shoppingCart.html',
      controller: MyController
    }),
    otherwise({
      redirectTo:'/store'
    });
}]);

//we have created a store and shopping cart using data service
MyApp.factory("MyService", function () {
  var myStore = new store(); 
  var myCart = new shoppingCart("MyStore");

  //enable Paypal checkout with parameter that identifies the merchant 
   myCart.addCheckoutParameters("PayPal", "abc@gmail.com");

   //return data object with store and cart
   return {
     store: myStore,
     cart: myCart
   };
});
