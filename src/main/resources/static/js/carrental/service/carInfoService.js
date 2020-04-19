app.service('carInfoService', function ($http) {
    //查询所有车辆信息
    this.getCarInfoList=function () {
        return $http.get('/carInfo/getCarInfoList');
    }

    //查询所有车辆信息，带分页
    this.getCarInfoPage=function (curPage, size) {
        return $http.get('/carInfo/getCarInfoPage?curPage='+curPage+'&size='+size);
    }

    //根据部门id查询车辆信息
    this.getCarInfoById=function (id) {
        return $http.get('/carInfo/getCarInfoById?id='+id);
    }

    //添加车辆信息
    this.addCarInfo=function(carInfo){
        return $http.post('/carInfo/addCarInfo', carInfo);
    }

    //删除车辆信息
    this.delCarInfoById=function (id) {
        return $http.get('/carInfo/delCarInfoById?id='+id);
    }

    //批量删除车辆信息
    this.delCarInfoByIds=function (ids) {
        return $http.get('/carInfo/delCarInfoByIds?ids='+ids);
    }

    //根据id修改车辆信息
    this.updateCarInfo=function (carInfo) {
        return $http.post('/carInfo/updateCarInfo', carInfo);
    }
})