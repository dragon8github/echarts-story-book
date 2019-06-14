<template>
    <div class="BaseBar">
        <div id="main"></div>
    </div>
</template>
<script>
export default {
    name: 'BaseBar',
    data() {
        return {

        }
    },
    mounted() {
        var myChart = echarts.init(document.getElementById('main'))
        myChart.setOption({
            title: {
                text: '占用道路问题结构',
                x: 'center',
                align: 'right'
            },
            xAxis: {
                data: ["经营占道", "垃圾占道", "车辆占道", "霸占车位", "其他占道"],
                axisLine: {
                    lineStyle: {
                        color: 'black',
                        width: 0.5
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 18
                    }
                }
            },
            yAxis: {
                splitLine: {
                    show: true
                },
                type: 'value',
                axisLine: {
                    lineStyle: {
                        width: 0
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: 'black',
                        fontSize: 14
                    }
                }
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [2240, 1768, 1547, 600, 31],
                barWidth: 25,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#00a0e9', '#00a0e9 ', '#00a0e9 ', '#00a0e9 ', '#00a0e9'];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            color: 'black',
                            fontSize: 14,
                            formatter: '{c}'
                        },
                        opacity: 0.4
                    },
                },
            }]
        })
    },
}
</script>
<style scoped>
#main {
    width: 600px;
    height: 400px;
}
</style>

<docs>
    Docs inside vue module
    ```JavaScript
    console.log(20190614092303, )
    ```
</docs>