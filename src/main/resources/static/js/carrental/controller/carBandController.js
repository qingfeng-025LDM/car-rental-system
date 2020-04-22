app.controller('carBandController', function ($scope, $controller, carBandService) {

    $controller('baseController', {$scope:$scope});

    //查询所有品牌信息
    $scope.getCarBandList=function () {
        carInfoService.getCarBandList().success(
            function (response) {
                $scope.carBandList = response;
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
                area: ['400px', '200px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    $scope.saveProduct();
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
                    // $scope.reloadList();
                    $scope.getCarBandList();
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }

    //删除员工
    $scope.delCarBandById=function (id) {
        carBandService.delCarBandById(id).success(
            function (response) {
                if(response.success){
                    $scope.getCarBandList();
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
                    $scope.getCarBandList();
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }
    //批量删除询问
    $scope.delProductsConfirm=function(){
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

    //商品搜索
    $scope.searchCarBand={};    //定义商品搜索对象
    $scope.search=function (currentPage, rows) {
        carBandService.searchProduct(currentPage, rows, $scope.searchProduct).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }


    //修改和添加弹窗 隐藏的属性
    $scope.addNumHide=true;
    $scope.showAndHide=function(){
        $scope.addNumHide=!$scope.addNumHide;
    }

});