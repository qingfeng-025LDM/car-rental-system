app.service('carAppointService', function ($http) {

    //查询所有车辆预约信息，带分页
    this.getCarAppointPage=function (curPage, size) {
        return $http.get('/carAppoint/getCarAppointPage?curPage='+curPage+'&size='+size);
    }

    this.getCarAppointById=function (id) {
        return $http.get('/carAppoint/getCarAppointById?id='+id);
    }

    this.addCarAppoint=function (carAppoint) {
        return $http.post('/carAppoint/addCarAppoint', carAppoint);
    }

    //根据id修改车辆预约信息
    this.updateCarAppoint=function (carAppoint) {
        return $http.post('/carAppoint/updateCarAppoint', carAppoint);
    }

    this.searchEmployee=function (currentPage, rows, searchEmployee) {
        return $http.post('/emp/searchEmployee?currentPage='+currentPage+'&rows='+rows, searchEmployee);
    }


});