<!--PASS-->
<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'

  require('echarts/theme/macarons')
  // 抖动???
  import { debounce } from '@/utils'

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      // 被index.vue调用, 设置参数传入
      chartData: {
        type: Object
      }
    },
    data() {
      return {
        chart: null
      }
    },
    // 初始化时调用: 生命周期仅调用一次
    mounted() {
      // 初始化LineChart
      this.initChart()
      // 若允许自动伸缩
      if (this.autoResize) {
        // 抖动效果
        this.__resizeHanlder = debounce(() => {
          // 若chart已设置: resize()
          if (this.chart) {
            this.chart.resize()
          }
        }, 100)
        // 添加resize, 自动缩放功能
        window.addEventListener('resize', this.__resizeHanlder)
      }

      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
    },
    // 销毁
    beforeDestroy() {
      // 若无chart: 直接返回
      if (!this.chart) {
        return
      }
      // 若允许自动伸缩: 删除监听事件
      if (this.autoResize) {
        window.removeEventListener('resize', this.__resizeHanlder)
      }

      // 删除侧边栏监听
      const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)

      this.chart.dispose()
      this.chart = null
    },
    // 侦听器: chartData改变时调用
    watch: {
      chartData: {
        deep: true,
        // handler: 调用方法重新渲染
        handler(val) {
          this.setOptions(val)
        }
      }
    },
    methods: {
      // 设置表单数据: 线1数据, 线2数据
      setOptions({ line1, line2, line1Data, line2Data } = {}) {
        this.chart.setOption({
          // 横坐标
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          // 表单范围
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          // 顶部标记
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          // 纵坐标
          yAxis: {
            axisTick: {
              show: false
            }
          },
          // 线标记
          legend: {
            data: [line1, line2]
          },
          // 线
          series: [{
            // 线1
            name: line1, itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: line1Data,
            // 动画
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
            // 线2
          {
            name: line2,
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: line2Data,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }]
        })
      },
      // 初始化chart
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.setOptions(this.chartData)
      }
    }
  }
</script>
