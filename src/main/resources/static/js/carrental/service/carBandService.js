app.service('carBandService', function ($http) {
    this.getCarBandList=function () {
        return $http.get('/carBand/getCarBandList');
    }

    this.searchProduct=function (curPage, size, searchProduct) {
        return $http.post('/carBand/searchCarBand?curPage='+curPage+'&size='+size, searchProduct);
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