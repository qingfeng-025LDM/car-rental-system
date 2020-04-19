app.service('replenishmentDetailsService',function ($http) {
    this.findByRepSheetId=function (repSheetId) {
        return $http.get('/repDetails/findByRepSheetId?repSheetId='+repSheetId);
    }
})