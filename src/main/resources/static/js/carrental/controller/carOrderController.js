app.controller('carOrderController', function ($scope, $controller, carOrderService) {

    $controller('baseSearchController', {$scope:$scope});

    $scope.searchOrder={};
    $scope.findPage=function (curPage, size) {
        carOrderService.getOrderPage(curPage, size, $scope.searchOrder).success(
            function (response) {
                $scope.orderList = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //订单详情弹窗
    $scope.checkCarOrderDetail=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['订单详细信息', 'font-size:40px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['800px', '554px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkCarOrderDetail'), //弹窗的内容
                cancel: function () {
                    $scope.toggle();
                }
            });

        });
    }

    $scope.editOrder=function () {       //车辆信息弹窗
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['订单信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '450px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkOrder'),
                cancel: function () {
                    $scope.toggle();
                }
            });
        });
    }

    //根据销售订单id查询订单选项
    $scope.getOrderDetailByOrderId=function (orderId) {
        carOrderService.getOrderDetailByOrderId(orderId).success(
            function (response) {
                if(response != null){
                    $scope.orderDetailList=response.data;
                }else{
                    layui.msg("订单项信息不存在！", {icon: 2});
                }

            }
        );
    }

    //根据销售订单id查询订单选项
    $scope.getOrderById=function (id) {
        carOrderService.getOrderById(id).success(
            function (response) {
                if(response != null){
                    $scope.order=response.data;
                }else{
                    layui.msg("订单信息不存在！", {icon: 2});
                }
            }
        );
    }

    //订单状态
    $scope.status=['未付款', '已付款', '交易完成', '交易异常'];

})