app.service('loginService', function ($http) {

    this.showLoginUser=function () {
        return $http.get('/login/loginUser');
    }

    this.updatePassword=function (password) {
        return $http.get('/login/updatePassword?password='+password);
    }

});