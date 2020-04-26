app.service('carAppointService', function ($http) {

    //查询所有车辆预约信息，带分页
    this.getCarAppointPage=function (curPage, size, searchCarAppoint) {
        return $http.post('/carAppoint/getCarAppointPage?curPage='+curPage+'&size='+size, searchCarAppoint);
    }

    this.getCarAppointById=function (id) {
        return $http.get('/carAppoint/getCarAppointById?id='+id);
    }


});