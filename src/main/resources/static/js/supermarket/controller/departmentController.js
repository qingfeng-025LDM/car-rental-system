app.controller('departmentController', function ($scope, $controller, departmentService) {

    $controller('baseController', {$scope:$scope});

    //查询所有部门
    $scope.getAllDepartment=function () {
        departmentService.getAllDepartment().success(
            function (response) {
                $scope.deptList = response;
            }
        );
    }

    //根据部门id查询部门
    $scope.getDepartmentById=function(id){
        departmentService.getDepartmentById(id).success(
            function (response) {
                if(response != null){
                    $scope.department=response;
                }else{
                    layui.msg("部门不存在！", {icon: 2});
                }
            }
        );
    }
    
    //查询所有部门，带分页
    $scope.findPage=function (currentPage, rows) {
        departmentService.getDepartmentPage(currentPage, rows).success(
            function (response) {
                $scope.list = response.rows;	//显示当前页数据
                $scope.paginationConf.totalItems = response.sum;	//更新总记录数
            }
        );
    }

  //  $scope.department={};   //初始化
    //保存部门信息
    $scope.saveDepartment=function () {
        var departmentMethod;
        if($scope.department.deptId != null){
            departmentMethod = departmentService.updateDepartment($scope.department); //修改
        }else{
            departmentMethod = departmentService.addDepartment($scope.department);    //添加
        }
        departmentMethod.success(
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
    $scope.editDept=function () {       //部门信息弹窗
        // function editEmp() {
            layer.open({
                title: ['部门信息', 'font-size:20px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['600px', '360px'],
                shadeClose: false, //关闭遮罩关闭
                content: $('#edit'), //'/dept/edit',
                btn: ['保存','取消'],
                btn1: function(index, layreo){
                    if ($scope.department.deptName == null){
                        layer.msg("部门名称不能为空！", {icon:2});
                    }else {
                        $scope.saveDepartment();
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
        // }
    }


    //删除部门
    $scope.delDepartment=function (id) {
        departmentService.delDepartment(id).success(
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
    $scope.delDeptConfirm=function(id){
        layer.confirm('是否删除？', {
            btn: ['是', '否']
        },function () {
            $scope.delDepartment(id);
        });
    }

    //批量删除
    $scope.delDepartments=function () {
        departmentService.delDepartments($scope.selectIds).success(
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
    $scope.delDeptsConfirm=function(){
        if ($scope.selectIds.length == 0){
            layer.alert("请选择要删除的部门", {icon:0})
        }else {
            layer.confirm('是否删除？', {
                btn: ['是', '否']
            }, function () {
                $scope.delDepartments();
            });
        }
    }
    
});