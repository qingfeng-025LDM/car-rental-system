app.controller('userInfoController', function ($scope, $controller, userInfoService) {

    $controller('baseSearchController', {$scope:$scope});

    $scope.searchUser = {};
    $scope.findPage=function (currentPage, rows) {
        userInfoService.getUserInfoPage(currentPage, rows, $scope.searchUser).success(
            function (response) {
                $scope.userList = response.rows;//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询用户信息
    $scope.getUserInfoById=function(id){
        userInfoService.getUserInfoById(id).success(
            function (response) {
                if(response != null){
                    $scope.userInfo = response.data;
                }else{
                    layer.alert("用户不存在！", {icon: 2});
                }
            }
        );
    }

    //用户信息弹窗
    $scope.editUser=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['用户信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '350px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //弹窗的内容
                btn: ['保存','取消'],
                btn1: function(index, layreo){
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

    //删除用户
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

    $scope.status=['正常', '禁用', '异常']
    $scope.sex=['女', '男']
    $scope.isMember=['否', '是']

});