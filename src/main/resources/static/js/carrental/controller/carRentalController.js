app.controller('stockController', function ($scope, $controller, carRentalService) {

    $controller('baseController', {$scope:$scope});

    //查询所有仓库信息
    $scope.getStockList=function(){
        carRentalService.getStockList().success(
            function (response) {
                $scope.stockList = response;
            }
        );
    }

    //分页查询所有汽车租用信息
    $scope.findPage=function (curPage, size) {
        carRentalService.getCarRentalPage(curPage, size).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询仓库信息
    $scope.getCarRentalById=function (id) {
        carRentalService.getCarRentalById(id).success(
            function (response) {
                if(response != null){
                    $scope.stock=response;
                }else{
                    layer.msg("仓库不存在", {icon: 2});
                }
            }
        );
    }

    //汽车租用信息弹窗
    $scope.editCarRental=function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title: ['出租信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '360px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
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

    $scope.myStockStatus=true;

   //仓库状态
    $scope.status=['关闭', '开启'];

});