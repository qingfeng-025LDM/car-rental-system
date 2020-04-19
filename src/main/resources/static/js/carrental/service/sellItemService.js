app.service('sellItemService', function ($http) {
    this.getAllSellItemPage=function (currentPage, rows) {
        return $http.get('/sellItem/sellItemPage?currentPage='+currentPage+'&rows='+rows);
    }

    this.findItemBySellInfoId=function (sellInfoId) {
        return $http.get('/sellItem/findBySellInfoId?sellInfoId='+sellInfoId);
    }
})