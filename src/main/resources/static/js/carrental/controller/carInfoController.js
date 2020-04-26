app.controller('carInfoController', function ($scope, $controller, carInfoService) {

    $controller('baseSearchController', {$scope:$scope});

    //查询所有车辆信息
    $scope.getCarInfoList=function () {
        carInfoService.getCarInfoList().success(
            function (response) {
                $scope.carInfoList = response;
            }
        );
    }

    //根据部门id查询车辆信息
    $scope.getCarInfoById=function(id){
        carInfoService.getCarInfoById(id).success(
            function (response) {
                if(response != null){
                    $scope.carInfo = response.data;
                }else{
                    layui.msg("查询的车辆信息不存在！", {icon: 2});
                }
            }
        );
    }
    
    //分页查询所有车辆信息
    $scope.searchCarInfo = {};       //定义搜索对象
    $scope.findPage=function (curPage, size) {
        carInfoService.getCarInfoPage(curPage, size, $scope.searchCarInfo).success(
            function (response) {
                $scope.carInfoList = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //保存车辆信息
    $scope.saveCarInfo=function () {
        var carInfoRes;
        console.log($scope.carInfo);
        if($scope.carInfo.id != null){
            carInfoRes = carInfoService.updateCarInfo($scope.carInfo); //修改
        }else{
            carInfoRes = carInfoService.addCarInfo($scope.carInfo);    //添加
        }
        carInfoRes.success(
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
    $scope.editCarInfo=function () {       //车辆信息弹窗
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['车辆信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['700px', '600px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#editOrAddPop'),
                btn: ['保存', '取消'],
                btn1: function (index, layreo) {
                    if ($scope.carInfo.carName == null) {
                        layer.msg("车辆名称不能为空！", {icon: 2});
                    } else {
                        $scope.saveCarInfo();
                        $scope.toggle();    //修改ng-hide的值
                        layer.close(index);
                    }
                },
                btn2: function (index, layero) {
                    $scope.toggle();
                },
                cancel: function () {
                    $scope.toggle();
                }
            });
        });
    }


    //删除车辆信息
    $scope.delCarInfoById=function (id) {
        carInfoService.delCarInfoById(id).success(
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
    //单个删除询问
    $scope.delCarConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delCarInfoById(id);
        });
    }

    //批量删除车辆信息
    $scope.delCars=function () {
        carInfoService.delCarInfoByIds($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                    $scope.selectIds=[];
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }
    //批量删除询问
    $scope.delCarsConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的车辆", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            }, function () {
                $scope.delCars();
            });
        }
    }

    //是否租用
    $scope.isrent=['否', '是'];

    $scope.hasDriver=['否', '是'];

    //车辆状态
    $scope.status=['禁止出租', '正常', '正在维修', '已删除'];
    
});