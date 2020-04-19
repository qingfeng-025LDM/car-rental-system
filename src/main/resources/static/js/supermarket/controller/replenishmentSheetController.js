app.controller('replenishmentSheetController', function ($scope, $controller, replenishmentSheetService,
                                                         replenishmentDetailsService, purchaseOrderService, forecastService) {

    $controller('baseController', {$scope:$scope});

    //获取临时补货单列表(存入Cookie中)
    $scope.getTempRepSheetList=function () {
        replenishmentSheetService.getTempRepSheetList().success(
            function (response) {
                $scope.tempRepSheetList=response;
            }
        );
    }

    //从临时补货单中移除补货商品
    $scope.delProductToRepSheet=function (productId, num) {
        replenishmentSheetService.addProductToRepSheet(productId, num).success(
            function (response) {
                if (response.success){
                    $scope.getTempRepSheetList();
                    layer.msg("移除成功", {icon:1});
                } else {
                    layer.msg("移除失败", {icon:2});
                }
            }
        );
    }

    //添加商品补货单
    $scope.addReplenishmentSheet=function (tempRepSheetList) {
        replenishmentSheetService.addReplenishmentSheet(tempRepSheetList).success(
            function (response) {
                if (response.success){
                    $scope.getTempRepSheetList();
                    layer.msg(response.msg, {icon:1});
                }else {
                    layer.msg(response.msg, {icon:2});
                }
            }
        );
    }

    //查询所有补货单
    $scope.getAllReplenishmentSheet=function () {
        replenishmentSheetService.getAllReplenishmentSheet().success(
            function (response) {
                $scope.repSheetList=response;
            }
        );
    }

    //补货单明细弹窗
    $scope.checkRepDetails=function () {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['补货明细信息', 'font-size:40px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['900px', '500px'],
                offset: '20px',
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkRepDetails'), //弹窗的内容
                cancel: function () {
                    $scope.hideAndShow();
                }
            });

        });
    }

    //主管审核
    $scope.reviewRepSheet=function (repSheetId) {
        layui.use('layer', function () {
            var layer = layui.layer;

            layer.open({
                title: ['补货信息审核', 'font-size:40px'],
                type: 1,
                maxmin: true,
                skin: 'layui-layer-rim', //加上边框
                area: ['900px', '500px'],
                offset: '20px',
                shadeClose: false, //关闭遮罩关闭
                content: $('#checkRepDetails'), //弹窗的内容
                btn: ['同意', '驳回', '取消'],
                btn1: function(index, layreo){
                    $scope.updateStatus(2, repSheetId);     //审核：通过
                    $scope.hideAndShow();
                    layer.close(index);
                },
                btn2: function(index, layreo){

                    layer.prompt({
                        formType: 2,
                        value: '',
                        title: '请输入批注',
                        area: ['200px', '100px'] //自定义文本域宽高
                    }, function(value, index, elem){
                        $scope.updateNotesById(value, repSheetId);
                        $scope.updateStatus(3, repSheetId);     //审核：驳回
                        $scope.hideAndShow();
                        layer.close(index);
                    });

                },
                btn3: function(index){
                    $scope.hideAndShow();
                },
                cancel: function () {
                    $scope.hideAndShow();
                }
            });

        });
    }

    //修改批注，用于主管驳回补货单申请
    $scope.updateNotesById=function(notes, repSheetId){
        replenishmentSheetService.updateNotes(notes, repSheetId).success(
            function (response) {
                if (response.success){
                    layer.msg(response.msg, {icon:1});
                } else {
                    layer.msg(response.msg, {icon:2});
                }
            }
        );
    }

    //查询补货明细弹窗的隐藏属性
    $scope.repDetailsHide=true;
    $scope.hideAndShow=function(){
        $scope.repDetailsHide=!$scope.repDetailsHide;
    }

    //修改状态，用于审核
    $scope.updateStatus=function(status, repSheetId){
        replenishmentSheetService.updateStatus(status, repSheetId).success(
            function (response) {
                if (response){
                    $scope.getAllReplenishmentSheet();
                } else {
                    layer.alert('补货单不存在', {icon:2});
                }
            }
        );
    }

    //库管员提交补货申请，采购员生成采购订单
    $scope.submitRepApply=function(status, repSheetId){
        replenishmentSheetService.submitRepApply(status, repSheetId).success(
            function (response) {
                if(status == 1){    //提交申请
                    if (response.success){
                        $scope.getAllReplenishmentSheet();
                        layer.alert(response.msg, {icon:1});
                    } else {
                        layer.alert(response.msg, {icon:2});
                    }
                }else if (status == 4){     //生成采购订单
                    if (response.success){
                        $scope.getAllReplenishmentSheet();
                    } else {
                        layer.alert("系统异常", {icon:2});
                    }
                }

            }

        );
    }

    //查看批注
    $scope.findNotesById=function(id){
        replenishmentSheetService.findNotesById(id).success(
            function (response) {
                if (response.notes != null){
                    layer.alert(response.notes);
                } else {
                    layer.alert("无");
                }
            }
        );
    }

    //补货单状态
    $scope.status=['未提交', '等待审核', '审核通过', '未通过', '已生成订单'];

    //生成采购订单按钮禁用属性
    $scope.btnDisabled1=true;
    $scope.btnDisabled2=false;

    //根据补货单id查询补货明细
    $scope.findRepDetailsByRepSheetId=function (repSheetId) {
        replenishmentDetailsService.findByRepSheetId(repSheetId).success(
            function (response) {
                $scope.repDetailsList=response;
            }
        );
    }

    //生成采购订单
    $scope.addPurchaseOrder=function (repSheetId) {
        purchaseOrderService.addPurchaseOrder(repSheetId).success(
            function (response) {
                if (response.success){
                    $scope.submitRepApply(4, repSheetId);
                    layer.msg(response.msg, {icon:1});
                } else {
                    layer.msg(response.msg, {icon:2});
                }
            }
        );
    }

    //根据商品的销售量预测
    $scope.getForecastBySellNum=function (productId) {
        forecastService.getForecastBySellNum(productId).success(
            function (response) {
                if (response == null){
                    layer.open({
                        type: 0,
                        title: '预计下个月的销售量为',
                        content: '数据不足，无法预测'
                    });
                }else{
                    layer.open({
                        type: 0,
                        title: '预计下个月的销售量为',
                        content: response
                    });
                }
            }
        );
    }


});