app.service('replenishmentSheetService', function ($http) {
    this.getTempRepSheetList=function () {
        return $http.get('/tempRepSheet/getTempRepSheet');
    }

    //将商品添加到临时补货单中
    this.addProductToRepSheet=function (productId, num) {
        return $http.get('/tempRepSheet/addProductToRepSheet?productId='+productId+'&num='+num);
    }

    //添加商品补货单
    this.addReplenishmentSheet=function (tempReplenishmentSheetList) {
        return $http.post('/repSheet/addRepSheet', tempReplenishmentSheetList);
    }

    this.getAllReplenishmentSheet=function () {
        return $http.get('/repSheet/getAllRepSheet');
    }

    //修改状态，主管审核补货单
    this.updateStatus=function (status, repSheetId) {
        return $http.get('/repSheet/updateStatus?status='+status+'&repSheetId='+repSheetId);
    }

    //库管员提交补货申请
    this.submitRepApply=function (status, repSheetId) {
        return $http.get('/repSheet/subRepApply?status='+status+'&repSheetId='+repSheetId);
    }

    //修改批注
    this.updateNotes=function (notes, repSheetId) {
        return $http.get('/repSheet/updateNotes?notes='+notes+'&repSheetId='+repSheetId);
    }

    //根据id查询补货单信息
    this.findNotesById=function (id) {
        return $http.get('/repSheet/findNotesById?id='+id);
    }
})