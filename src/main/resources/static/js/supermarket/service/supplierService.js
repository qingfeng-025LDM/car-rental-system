app.service('supplierService', function ($http) {

    this.getAllSupplier=function () {
        return $http.get('/supplier/supplierList');
    }

    this.getAllSupplierPage=function (currentPage, rows) {
        return $http.get('/supplier/supplierPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.getSupplierById=function (id) {
        return $http.get('/supplier/getSupById?id='+id);
    }

    this.delSupplier=function (id) {
        return $http.get('/supplier/delSupplier?id='+id);
    }

    this.delSuppliers=function (ids) {
        return $http.get('/supplier/delSuppliers?ids='+ids);
    }

    this.addSupplier=function (supplier) {
        return $http.post('/supplier/addSupplier', supplier);
    }

    this.updateSupplier=function (supplier) {
        return $http.post('/supplier/updateSupplier', supplier);
    }
})