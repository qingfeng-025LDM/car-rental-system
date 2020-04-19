app.service('employeeService', function ($http) {

    //查询所有员工
    this.getEmployeeList=function () {
        return $http.get('/emp/empList');
    }

    //查询所有员工，带分页
    this.getEmployeePage=function (currentPage, rows) {
        return $http.get('/emp/empPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.getEmpById=function (id) {
        return $http.get('/emp/getEmpById?id='+id);
    }

    this.delEmployee=function (id) {
        return $http.get('/emp/delEmp?id='+id);
    }

    this.delEmployees=function (ids) {
        return $http.get('/emp/delEmps?ids='+ids);
    }

    this.addEmployee=function (employee) {
        return $http.post('/emp/addEmp', employee);
    }

    this.updateEmployee=function (employee, oldDeptId) {
        return $http.post('/emp/updateEmp?oldDeptId='+oldDeptId, employee);
    }

    this.searchEmployee=function (currentPage, rows, searchEmployee) {
        return $http.post('/emp/searchEmployee?currentPage='+currentPage+'&rows='+rows, searchEmployee);
    }

    this.findByDeptId=function (deptId) {
        return $http.get('/emp/findByDeptId?deptId='+deptId);
    }

});