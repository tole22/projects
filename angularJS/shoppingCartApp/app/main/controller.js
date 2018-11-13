function MyController($scope, $routerParams, MyService) {
    $scope.store = MyService.store;
    $scope.cart = MyService.cart;
    if($routerParams.productId != null) {
        $scope.product = $scope.store.getProduct($routerParams.productId);
    }
}