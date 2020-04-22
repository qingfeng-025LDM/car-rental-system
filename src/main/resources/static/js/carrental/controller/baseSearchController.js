app.controller('baseSearchController', function($scope){

    //分页控件配置  onChange当页码变更后自动触发的方法
    $scope.paginationConf={
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();
        }
    };

    $scope.reloadList=function(){
        $scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    //复选框的勾选与取消
    $scope.selectIds=[];	//选中的id集合
    $scope.updateSelectIds=function($event, id){		//更新复选框
        if($event.target.checked){		//$event.target  表示目标复选框
            $scope.selectIds.push(id);
        }else{
            var index = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(index, 1);
        }
    }

    //修改和添加弹窗 隐藏的属性
    $scope.myEditHide=true;
    $scope.toggle=function(){
        $scope.myEditHide=!$scope.myEditHide;
    }

});