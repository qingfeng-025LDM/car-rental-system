app.service('loginService', function ($http) {

    this.getLoginUser=function () {
        return $http.get('/login/getLoginUser');
    }


});