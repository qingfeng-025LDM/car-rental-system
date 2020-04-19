app.service('sellInfoService', function ($http) {
    this.getAllSellInfoPage=function (currentPage, rows) {
        return $http.get('/sell/sellInfoPage?currentPage='+currentPage+'&rows='+rows);
    }

    //搜索
    this.searchSellInfo=function (currentPage, rows, searchSellInfo) {
        return $http.post('/sell/searchSellInfo?currentPage='+currentPage+'&rows='+rows, searchSellInfo);
    }
})