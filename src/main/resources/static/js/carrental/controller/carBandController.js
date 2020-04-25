app.controller('carBandController', function ($scope, $controller, carBandService) {

    $controller('baseSearchController', {$scope:$scope});

    //品牌搜索
    $scope.searchCarBand={};    //定义品牌搜索对象
    $scope.findPage=function (currentPage, rows) {
        carBandService.getCarBandPage(currentPage, rows, $scope.searchCarBand).success(
            function (response) {
                $scope.carBandList = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询品牌信息
    $scope.getCarBandById=function (id) {
        carBandService.getCarBandById(id).success(
            function (response) {
                if(response != null){
                    $scope.carBand=response;
                }else{
                    layer.alert("汽车品牌不存在！", {icon: 2});
                }
            }
        );
    }
    //商品信息弹窗
    $scope.editCarBand=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['汽车品牌信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['500px', '300px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#editOrAddPop'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    $scope.saveCarBand();
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
    //保存汽车品牌信息
    $scope.saveCarBand=function () {
        var cardBandRes;
        if($scope.carBand.id != null){
            cardBandRes = carBandService.updateCarBand($scope.carBand); //修改
        }else{
            cardBandRes = carBandService.addCarBand($scope.carBand);    //添加
        }
        cardBandRes.success(
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

    //删除汽车品牌
    $scope.delCarBandById=function (id) {
        carBandService.delCarBandById(id).success(
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
    $scope.delCarBandConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delCarBandById(id);
        });
    }

    //批量删除
    $scope.delCarBands=function () {
        carBandService.delCarBandByIds($scope.selectIds).success(
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
    //批量删除询问
    $scope.delCarBandsConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的商品", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            }, function () {
                $scope.delCarBands();
            });
        }
    }

    $scope.status=['禁用', '启用']

    //修改和添加弹窗 隐藏的属性
    $scope.addNumHide=true;
    $scope.showAndHide=function(){
        $scope.addNumHide=!$scope.addNumHide;
    }

});