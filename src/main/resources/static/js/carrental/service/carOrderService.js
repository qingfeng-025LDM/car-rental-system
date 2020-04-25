app.service('carOrderService', function ($http) {
    this.getOrderPage=function (curPage, size, searchOrder) {
        return $http.post('/order/getOrderPage?curPage='+curPage+'&size='+size, searchOrder);
    }

    this.getOrderById=function (id) {
        return $http.get('/order/getOrderById?id='+id);
    }

    //根据订单id获取订单详情
    this.getOrderDetailByOrderId=function (orderId) {
        return $http.get('/order/getOrderDetailByOrderId?orderId='+orderId);
    }
})