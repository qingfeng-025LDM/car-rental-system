app.controller('purchaseOrderItemController', function ($scope, $controller, purchaseOrderItemService) {

    $controller('baseController', {$scope:$scope});

    $scope.findPage=function (currentPage, rows) {
        purchaseOrderItemService.getAllPurchaseOrderItemPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;    //显示当前页数据
                $scope.paginationConf.totalItems=response.sum;    //更新总记录数
            }
        );
    }

});