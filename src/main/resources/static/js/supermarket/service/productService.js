app.service('productService', function ($http) {
    this.getAllProductPage=function (currentPage, rows) {
        return $http.get('/product/productPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.searchProduct=function (currentPage, rows, searchProduct) {
        return $http.post('/product/searchProduct?currentPage='+currentPage+'&rows='+rows, searchProduct);
    }

    this.getProductById=function (productId) {
        return $http.get('/product/getById?productId='+productId);
    }

    this.addProduct=function (product) {
        return $http.post('/product/addProduct', product);
    }

    this.updateProduct=function (product) {
        return $http.post('/product/updateProduct', product);
    }

    this.delProduct=function (productId) {
        return $http.get('/product/delProduct?productId='+productId);
    }

    this.delProducts=function (productIds) {
        return $http.get('/product/delProducts?productIds='+productIds);
    }
});