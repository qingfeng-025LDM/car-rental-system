app.controller('carAppointController', function ($scope, $controller, carAppointService) {

    $controller('baseSearchController', {$scope:$scope});

    //分页查询查询所有汽车预约信息
    $scope.searchCarAppoint = {};
    $scope.findPage=function (currentPage, rows) {
        carAppointService.getCarAppointPage(currentPage, rows, $scope.searchCarAppoint).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

    //根据id查询车辆预约信息
    $scope.getCarAppointById=function (id) {
        carAppointService.getCarAppointById(id).success(
            function (response) {
                if(response != null){
                    $scope.carAppoint=response.data;
                }else{
                    layer.msg("预约信息不存在", {icon: 2});
                }
            }
        );
    }
    //车辆预约信息弹窗
    $scope.editCarAppoint=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['车辆预约信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['700px', '500px'],
                offset: '50px',
                shadeClose: false, //关闭遮罩关闭
                content: $('#editOrAddPop'), //弹窗的内容
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

        })
    }
    //保存车辆预约信息
    $scope.saveCarAppoint=function () {
        var carAppointRes;
        if($scope.carAppoint.id != null){
            carAppointRes = carAppointService.updateCarAppoint($scope.carAppoint); //修改
        }else{
            carAppointRes = carAppointService.addCarAppoint($scope.carAppoint);    //添加
        }
        carAppointRes.success(
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

    //获取部门列表
    $scope.getDepartmentList=function () {
        departmentService.getAllDepartment().success(
            function (response) {
                $scope.departmentList=response;

            }
        );
    }

    //监视修改员工信息时员工部门的变化：value2是修改后的部门id，value1是修改前的部门id
    $scope.$watch('employee.deptId', function (value2, value1) {
        $scope.oldDeptId = value1;
    });

    //预约状态
    $scope.status=['预约中','正在租用', '已超期', '已取消'];

});