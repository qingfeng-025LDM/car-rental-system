app.controller('sellInfoController', function ($scope, $controller, sellInfoService, sellItemService, employeeService) {

    $controller('baseSearchController', {$scope:$scope});

    $scope.findPage=function (currentPage, rows) {
        sellInfoService.getAllSellInfoPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //销售订单项弹窗
    $scope.checkSellItem=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['销售订单项信息', 'font-size:40px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['1290px', '754px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkSellItem'), //弹窗的内容
                cancel: function () {
                    $scope.hideAndShow();
                }
            });

        });
    }

    //根据销售订单id查询订单选项
    $scope.findItemBySellInfoId=function (sellInfoId) {
        sellItemService.findItemBySellInfoId(sellInfoId).success(
            function (response) {
                $scope.sellItemList=response;
            }
        );
    }

    //订单搜索
    $scope.searchSellInfo={};     //定义搜索对象
    $scope.search=function(currentPage, rows){
        sellInfoService.searchSellInfo(currentPage, rows, $scope.searchSellInfo).success(
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

    //查询销售订单项弹窗的隐藏属性
    $scope.sellItemHide=true;
    $scope.hideAndShow=function(){
        $scope.sellItemHide=!$scope.sellItemHide;
    }

    //销售订单状态
    $scope.status=['未支付', '已支付', '交易完成', '已过期'];

})