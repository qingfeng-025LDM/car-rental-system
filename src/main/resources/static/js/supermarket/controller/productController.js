app.controller('productController', function ($scope, $controller, productService, productCategoryService, stockService, supplierService, replenishmentSheetService) {

    $controller('baseSearchController', {$scope:$scope});

    //查询所有商品，带分页
    $scope.findPage=function (currentPage, rows) {
        productService.getAllProductPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询商品信息
    $scope.getProductById=function (id) {
        productService.getProductById(id).success(
            function (response) {
                if(response != null){
                    $scope.product=response;
                }else{
                    layer.alert("商品不存在！", {icon: 2});
                }
            }
        );
    }
    //商品信息弹窗
    $scope.editProduct=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['商品信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['700px', '500px'],
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
    //保存部门信息
    $scope.saveProduct=function () {
        var productMethod;
        if($scope.product.productId != null){
            productMethod = productService.updateProduct($scope.product); //修改
        }else{
            productMethod = productService.addProduct($scope.product);    //添加
        }
        productMethod.success(
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
    $scope.delProduct=function (id) {
        productService.delProduct(id).success(
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
    $scope.delProductConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delProduct(id);
        });
    }

    //批量删除
    $scope.delProducts=function () {
        productService.delProducts($scope.selectIds).success(
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
    $scope.delProductsConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的商品", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            }, function () {
                $scope.delProducts();
            });
        }
    }

    //搜索一级商品分类
    $scope.searchCategory1=function () {
        productCategoryService.findByParentId(0).success(
            function (response) {
                $scope.searchCate1List=response;
            }
        );
    }

    //搜索二级商品分类
    $scope.$watch('searchProduct.category1Id', function (value2, value1) {
        productCategoryService.findByParentId(value2).success(
            function (response) {
                $scope.searchCate2List=response;
            }
        );
    });

    //搜索三级商品分类
    $scope.$watch('searchProduct.category2Id', function (value2, value1) {
        productCategoryService.findByParentId(value2).success(
            function (response) {
                $scope.searchCate3List=response;
            }
        );
    });


    //添加和修改时显示分类列表
    //搜索一级商品分类
    $scope.showCategory1=function () {
        productCategoryService.findByParentId(0).success(
            function (response) {
                $scope.showCate1List=response;
            }
        );
    }

    //搜索二级商品分类
    $scope.$watch('product.category1Id', function (value2, value1) {
        productCategoryService.findByParentId(value2).success(
            function (response) {
                $scope.showCate2List=response;
            }
        );
    });

    //搜索三级商品分类
    $scope.$watch('product.category2Id', function (value2, value1) {
        productCategoryService.findByParentId(value2).success(
            function (response) {
                $scope.showCate3List=response;
            }
        );
    });



    //查询所有仓库
    $scope.getAllStock=function () {
        stockService.getStockList().success(
            function (response) {
                $scope.stockList=response;
            }
        );
    }

    //查询所有供应商
    $scope.getAllSupplier=function () {
        supplierService.getAllSupplier().success(
            function(response){
                $scope.supplierList=response;
            }

        );
    }

    //商品搜索
    $scope.searchProduct={};    //定义商品搜索对象
    $scope.search=function (currentPage, rows) {
        productService.searchProduct(currentPage, rows, $scope.searchProduct).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //输入商品数量，用于商品补货
    $scope.addProductNum=function(productId){
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.prompt({
                formType: 0,
                value: '',
                title: '请输入商品数量',
                area: ['100px', '50px'] //自定义文本域宽高
            }, function(value, index, elem){
                $scope.addProductToRepSheet(productId, value);
                layer.close(index);
            });

        });
    }


    //添加补货商品到临时补货单中
    $scope.addProductToRepSheet=function (productId, num) {
        replenishmentSheetService.addProductToRepSheet(productId, num).success(
            function (response) {
                if (response.success){
                    layer.msg(response.msg, {icon:1});
                } else {
                    layer.msg(response.msg, {icon:2});
                }
            }
        );
    }

    //修改和添加弹窗 隐藏的属性
    $scope.addNumHide=true;
    $scope.showAndHide=function(){
        $scope.addNumHide=!$scope.addNumHide;
    }

    //商品下架提示信息
    $scope.productLowerShelfTips=function () {
        layer.open({
            title: '商品下架提醒',
            icon: 7,
            content: '蛋糕即将过期，请及时下架商品，一小时后商品将自动下架'
        });
    }

});