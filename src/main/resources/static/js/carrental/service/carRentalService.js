app.service('carRentalService', function ($http) {


    this.getCarRentalPage=function(curPage, size, searchCarRental){
        return $http.post('/carRental/getCarRentalPage?curPage='+curPage+'&size='+size, searchCarRental);
    }

    this.getCarRentalById=function (id) {
        return $http.get('/carRental/getCarRentalById?id='+id);
    }

    // this.addStock=function (stock) {
    //     return $http.post('/carRental/addStock', stock);
    // }
    //
    // this.updateStock=function (stock) {
    //     return $http.post('/carRental/updateStock', stock);
    // }
})