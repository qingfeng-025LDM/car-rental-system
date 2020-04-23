app.service('carOrderService', function ($http) {
    this.getOrderPage=function (currentPage, rows, searchOrder) {
        return $http.post('/order/getOrderPage?currentPage='+currentPage+'&rows='+rows, searchOrder);
    }

    this.searchPurchaseOrder=function (currentPage, rows, searchPurOrder) {
        return $http.post('/order/searchPurOrder?currentPage='+currentPage+'&rows='+rows, searchPurOrder);
    }

    //生成采购订单
    this.addPurchaseOrder=function (repSheetId) {
        return $http.get('/purchase/addPurOrder?repSheetId='+repSheetId);
    }
})