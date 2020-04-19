app.controller('loginController', function ($scope, loginService, departmentService) {
   $scope.showLoginUser=function () {
       loginService.showLoginUser().success(
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

   $scope.deptNameList=[];
   $scope.findDeptByEmpDeptId=function () {
       departmentService.getAllDepartment().success(
           function (response) {
               for (var i = 0; i < response.length; i++){
                   $scope.deptNameList[response[i].deptId]=response[i].deptName;
               }
           }
       );
   }

});