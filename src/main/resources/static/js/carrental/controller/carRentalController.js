app.controller('carRentalController', function ($scope, $controller, carRentalService) {

    $controller('baseSearchController', {$scope:$scope});


    //分页查询所有汽车租用信息
    $scope.searchCarRental={};  //搜索对象
    $scope.findPage=function (curPage, size) {
        carRentalService.getCarRentalPage(curPage, size, $scope.searchCarRental).success(
            function (response) {
                $scope.carRentalList = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询车辆租用信息
    $scope.getCarRentalById=function (id) {
        carRentalService.getCarRentalById(id).success(
            function (response) {
                if(response != null){
                    $scope.carRental=response.data;
                }else{
                    layer.msg("信息不存在", {icon: 2});
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
                area: ['800px', '500px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkPop'), //弹窗的内容
                cancel: function () {
                    $scope.toggle();
                }
            });
        })
    }

   //出租状态
    $scope.status=['未归还', '已归还', '正在租用'];

});