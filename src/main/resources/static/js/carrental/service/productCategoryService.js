app.service('productCategoryService', function ($http) {
    this.getAllCategoryPage=function (currentPage, rows) {
        return $http.get('/category/categoryPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.getCategoryById=function (id) {
        return $http.get('/category/getCategoryById?id='+id);
    }

    this.addCategory=function (category) {
        return $http.post('/category/addCategory', category);
    }

    this.updateCategory=function (category) {
        return $http.post('/category/updateCategory', category);
    }

    this.delCategory=function (id) {
        return $http.get('/category/delCate?id='+id);
    }

    //批量删除
    this.delCategories=function (ids) {
        return $http.get('/category/delCates?ids='+ids);
    }

    //根据上一级id查询分类
    this.findByParentId=function (parentId) {
        return $http.get('/category/findByParentId?parentId='+parentId);
    }
})