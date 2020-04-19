app.service('stockService', function ($http) {
    this.getStockList=function () {
        return $http.get('/stock/stockList');
    }

    this.getAllStockPage=function(currentPage, rows){
        return $http.get('/stock/stockPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.getStockById=function (id) {
        return $http.get('/stock/getStockById?id='+id);
    }

    this.addStock=function (stock) {
        return $http.post('/stock/addStock', stock);
    }

    this.updateStock=function (stock) {
        return $http.post('/stock/updateStock', stock);
    }
})