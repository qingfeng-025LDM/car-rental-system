app.service('userInfoService', function ($http) {
    this.getUserPage=function (curPage, size) {
        return $http.get('/user/getUserPage?curPage='+curPage+'&size='+size);
    }

    this.getUserById=function (id) {
        return $http.get('/user/getUserById?id='+id);
    }



    this.updateCategory=function (category) {
        return $http.post('/category/updateCategory', category);
    }

    this.delCategory=function (id) {
        return $http.get('/category/delCate?id='+id);
    }

})