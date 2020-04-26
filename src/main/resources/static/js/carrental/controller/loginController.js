app.controller('loginController', function ($scope, loginService) {
   $scope.getLoginUser=function () {
       loginService.getLoginUser().success(
           function(response){
               $scope.loginUser=response.user;
           }
       );
   }

   $scope.updatePassword=function (password) {
       loginService.updatePassword(password).success(
           function (response) {
               if (response.success){
                   layer.alert(response.message, {icon:1});
                   window.location.href="/logout";
               } else {
                   layer.alert(response.message, {icon:2});
               }
           }
       );
   }


});