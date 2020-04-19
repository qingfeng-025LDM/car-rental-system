app.controller('stockController', function ($scope, $controller, stockService) {

    $controller('baseController', {$scope:$scope});

    //查询所有仓库信息
    $scope.getStockList=function(){
        stockService.getStockList().success(
            function (response) {
                $scope.stockList = response;
            }
        );
    }

    //分页查询所有仓库信息
    $scope.findPage=function (currentPage, rows) {
        stockService.getAllStockPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询仓库信息
    $scope.getStockById=function (id) {
        stockService.getStockById(id).success(
            function (response) {
                if(response != null){
                    $scope.stock=response;
                }else{
                    layer.msg("仓库不存在", {icon: 2});
                }
            }
        );
    }
    //供应商信息弹窗
    $scope.editStock=function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title: ['仓库信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '360px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    $scope.saveStock();
                    $scope.toggle();    //修改ng-hide的值
                    layer.close(index);
                },
                btn2: function (index, layero) {
                    $scope.toggle();
                },
                cancel: function () {
                    $scope.toggle();
                }
            });
        })
    }
    //保存供应商信息
    $scope.saveStock=function () {
        var stockMethod;
        if($scope.stock.stockId != null){
            stockMethod = stockService.updateStock($scope.stock); //修改
        }else{
            stockMethod = stockService.addStock($scope.stock);    //添加
        }
        stockMethod.success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }

    $scope.myStockStatus=true;

   //仓库状态
    $scope.status=['关闭', '开启'];

});