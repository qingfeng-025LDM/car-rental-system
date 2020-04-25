app.service('carBandService', function ($http) {

    this.getCarBandPage=function (curPage, size, searchCarBand) {
        return $http.post('/carBand/getCarBandPage?curPage='+curPage+'&size='+size, searchCarBand);
    }

    this.getCarBandById=function (id) {
        return $http.get('/carBand/getCarBandById?id='+id);
    }

    this.addCarBand=function (carBand) {
        return $http.post('/carBand/addCarBand', carBand);
    }

    this.updateCarBand=function (carBand) {
        return $http.post('/carBand/updateCarBand', carBand);
    }

    this.delCarBandById=function (id) {
        return $http.get('/carBand/delCarBandById?id='+id);
    }

    this.delCarBandByIds=function (ids) {
        return $http.get('/carBand/delCarBandByIds?ids='+ids);
    }
});