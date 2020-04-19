app.service('forecastService', function ($http) {

    //根据销售量得到预测值
    this.getForecastBySellNum=function (productId) {
        return $http.get('/forecast/forecastProdNum?productId='+productId);
    }

})