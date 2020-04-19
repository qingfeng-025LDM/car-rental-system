var app = angular.module('supermarket', []);
app.controller('reportController', function ($scope, $http) {
    $http.get('/forecast/sellReport?productId=1fd920b936094b13171').success(
        function (response) {;
            $scope.sellNumList = [];
            $scope.doneTimeList = [];
            for (var i = 0; i < response.length; i++){
                $scope.sellNumList[i] = response[i].sellNum;
                $scope.doneTimeList[i] = response[i].sellInfo.doneTime;
            }

            $scope.option = null;
            // 指定图表的配置项和数据
            option = {
                title: {
                    text: '蛋糕'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: [{

                    data: $scope.doneTimeList
                }
                ] ,
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    data: $scope.sellNumList
                }]
            }

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    );
});
