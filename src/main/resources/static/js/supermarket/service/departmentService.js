app.service('departmentService', function ($http) {
    //查询所有部门
    this.getAllDepartment=function () {
        return $http.get('/dept/deptList');
    }

    //查询所有部门，带分页
    this.getDepartmentPage=function (currentPage, rows) {
        return $http.get('/dept/deptPage?currentPage='+currentPage+'&rows='+rows);
    }

    //根据部门id查询部门信息
    this.getDepartmentById=function (id) {
        return $http.get('/dept/getDeptById?id='+id);
    }

    //添加部门
    this.addDepartment=function(department){
        return $http.post('/dept/addDept', department);
    }

    //删除部门
    this.delDepartment=function (id) {
        return $http.get('/dept/delDept?id='+id);
    }

    //批量删除
    this.delDepartments=function (ids) {
        return $http.get('/dept/delDepts?ids='+ids);
    }

    //根据id修改部门
    this.updateDepartment=function (department) {
        return $http.post('/dept/updateDept', department);
    }
})