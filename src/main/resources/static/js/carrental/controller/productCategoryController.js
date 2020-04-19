app.controller('productCategoryController', function ($scope, $controller, productCategoryService) {

    $controller('baseController', {$scope:$scope});

    $scope.findPage=function (currentPage, rows) {
        productCategoryService.getAllCategoryPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询商品分类信息
    $scope.getCategoryById=function(id){
        productCategoryService.getCategoryById(id).success(
            function (response) {
                if(response != null){
                    $scope.category = response;
                }else{
                    layer.alert("商品分类不存在！", {icon: 2});
                }
            }
        );
    }

    //保存商品分类
    $scope.saveCategory=function () {
        var categoryMethod;
        if($scope.category.categoryId != null){
            categoryMethod = productCategoryService.updateCategory($scope.category);    //修改
        }else{
            $scope.category.parentId=$scope.parentId;       //将查询出的parentId赋给要添加的分类的parentId
            categoryMethod = productCategoryService.addCategory($scope.category);       //添加
        }
        categoryMethod.success(
            function (response) {
                if(response.success){
                    $scope.findByParentId($scope.parentId);     //完成后重新加载
                    layer.msg(response.msg, {icon:1});
                }else{
                    layer.msg(response.msg, {icon:2});
                }
            }
        );
    }
    //商品分类信息弹窗
    $scope.editCategory=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['商品分类信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '350px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    $scope.saveCategory();
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

        });
    }

    //删除分类
    $scope.delCategory=function (id) {
        productCategoryService.delCategory(id).success(
            function (response) {
                if(response.success){
                    $scope.findByParentId($scope.parentId); //重新加载
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }
    //单个删除询问
    $scope.delCategoryConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delCategory(id);
        });
    }

    //批量删除
    $scope.delCategories=function () {
        productCategoryService.delCategories($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.findByParentId($scope.parentId); //重新加载
                    layer.msg(response.msg, {icon: 1});
                }else{
                    layer.msg(response.msg, {icon: 2});
                }
            }
        );
    }
    //批量删除询问
    $scope.delCategoriesConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的分类", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            },function () {
                $scope.delCategories();
            });
        }
    }

    //上级分类id
    $scope.parentId=0;
    //根据上一级id查询分类
    $scope.findByParentId=function (parentId) {

        $scope.parentId=parentId;   //记住上一级分类id

        productCategoryService.findByParentId(parentId).success(
            function (response) {
                $scope.cateList=response;
            }
        );
    }

    //商品分类级别
    $scope.level=1;
    //设置分类级别
    $scope.setLevel=function (value) {
        $scope.level=value;
    }

    //选择分类级别
    $scope.selectCateLevel=function (p_category) {
        if ($scope.level == 1){
            $scope.cateLevel_1 = null;
            $scope.cateLevel_2 = null;
        }
        if ($scope.level == 2){
            $scope.cateLevel_1 = p_category;
            $scope.cateLevel_2 = null;
        }
        if ($scope.level == 3){
            $scope.cateLevel_2 = p_category;
        }

        $scope.findByParentId(p_category.categoryId);
    }

});