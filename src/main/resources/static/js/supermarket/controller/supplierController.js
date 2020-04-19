app.controller('supplierController', function ($scope, $controller, supplierService) {

    $controller('baseController', {$scope:$scope})

    //分页查询所有供应商
    $scope.findPage=function (currentPage, rows) {
        supplierService.getAllSupplierPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询供应商信息
    $scope.getSupplierById=function (id) {
        supplierService.getSupplierById(id).success(
            function (response) {
                if(response != null){
                    $scope.supplier=response;
                }else{
                    layer.msg("供应商不存在", {icon: 2});
                }
            }
        );
    }
    //供应商信息弹窗
    $scope.editSup=function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title: ['供应商信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '350px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    $scope.saveSupplier();
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
    $scope.saveSupplier=function () {
        var supplierMethod;
        if($scope.supplier.supId != null){
            supplierMethod = supplierService.updateSupplier($scope.supplier); //修改
        }else{
            supplierMethod = supplierService.addSupplier($scope.supplier);    //添加
        }
        supplierMethod.success(
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

    //删除员工
    $scope.delSupplier=function (id) {
        supplierService.delSupplier(id).success(
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
    $scope.delSupConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delSupplier(id);
        });
    }

    //批量删除
    $scope.delSuppliers=function () {
        supplierService.delSuppliers($scope.selectIds).success(
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
    $scope.delSupsConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的供应商", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            }, function () {
                $scope.delSuppliers();
            });
        }
    }

});