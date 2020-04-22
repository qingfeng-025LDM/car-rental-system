app.service('carOrderService', function ($http) {
    this.getAllPurchaseOrderPage=function (currentPage, rows) {
        return $http.get('/purchase/purchaseOrderPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.searchPurchaseOrder=function (currentPage, rows, searchPurOrder) {
        return $http.post('/purchase/searchPurOrder?currentPage='+currentPage+'&rows='+rows, searchPurOrder);
    }

    //生成采购订单
    this.addPurchaseOrder=function (repSheetId) {
        return $http.get('/purchase/addPurOrder?repSheetId='+repSheetId);
    }
})