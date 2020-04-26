app.controller('userInfoController', function ($scope, $controller, userInfoService) {

    $controller('baseSearchController', {$scope:$scope});

    $scope.searchUser = {};
    $scope.findPage=function (currentPage, rows) {
        console.log($scope.searchUser);
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
                area: ['800px', '550px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#editOrAddPop'), //弹窗的内容
                cancel: function () {
                    $scope.toggle();
                }
            });

        });
    }



    $scope.status=['正常', '禁用', '异常']
    $scope.sex=['女', '男']
    $scope.isMember=['否', '是']
});