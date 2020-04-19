app.controller('sellItemController', function ($scope, $controller, sellItemService) {
    $controller('baseController', {$scope:$scope})

    //分页查询所有销售订单选项信息
    $scope.findPage=function (currentPage, rows) {
        sellItemService.getAllSellItemPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

})