app.controller('carOrderController', function ($scope, $controller, carOrderService) {

    $controller('baseSearchController', {$scope:$scope});

    $scope.searchOrder={};
    $scope.findPage=function (currentPage, rows) {
        carOrderService.getOrderPage(currentPage, rows, $scope.searchOrder).success(
            function (response) {
                $scope.orderList = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //采购订单项弹窗
    $scope.checkCarOrderDetail=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['采购订单项信息', 'font-size:40px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['1290px', '754px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkPurOrderItem'), //弹窗的内容
                cancel: function () {
                    $scope.hideAndShow();
                }
            });

        });
    }

    //根据销售订单id查询订单选项
    $scope.findItemByPurOrderId=function (purOrderId) {
        carOrderService.findItemByPurOrderId(purOrderId).success(
            function (response) {
                $scope.purOrderItemList=response;
            }
        );
    }

    $scope.searchPurOrder={};
    $scope.search=function(currentPage, rows){
        carOrderService.searchPurchaseOrder(currentPage, rows, $scope.searchPurOrder).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //查询所有员工信息
    $scope.findByDeptId=function(deptId){
        employeeService.findByDeptId(deptId).success(
            function (response) {
                $scope.employeeList=response;
            }
        );
    }

    //查询采购订单项弹窗的隐藏属性
    $scope.purOrderItemHide=true;
    $scope.hideAndShow=function(){
        $scope.purOrderItemHide=!$scope.purOrderItemHide;
    }

    //销售订单状态
    $scope.status=['未完成', '已完成', '已过期'];

})