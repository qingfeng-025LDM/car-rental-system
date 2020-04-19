app.service('purchaseOrderItemService', function ($http) {
    this.getAllPurchaseOrderItemPage=function (currentPage, rows) {
        return $http.get('/purOrderItem/purItemPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.findItemByPurOrderId=function (purOrderId) {
        return $http.get('/purOrderItem/findByPurOrderId?purOrderId='+purOrderId);
    }
});