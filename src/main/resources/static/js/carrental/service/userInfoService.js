app.service('userInfoService', function ($http) {
    this.getUserInfoPage=function (curPage, size, searchUser) {
        return $http.post('/user/getUserInfoPage?curPage='+curPage+'&size='+size, searchUser);
    }

    this.getUserInfoById=function (id) {
        return $http.get('/user/getUserInfoById?id='+id);
    }

    this.delCategory=function (id) {
        return $http.get('/category/delCate?id='+id);
    }

})