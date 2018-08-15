<!--PASS-->
<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'

  require('echarts/theme/macarons')
  import { debounce } from '@/utils'

  // 动画延时ms
  const animationDuration = 3000

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
        default: '300px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          radar: {
            radius: '66%',
            center: ['50%', '42%'],
            splitNumber: 8,
            splitArea: {
              areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15
              }
            },
            // 雷达属性
            indicator: [
              { name: '年龄', max: 100 },
              { name: '资产', max: 100 },
              { name: '购买力', max: 100 },
              { name: '活跃度', max: 100 },
              { name: '热度', max: 100 }
            ]
          },
          // 雷达实体
          legend: {
            left: 'center',
            bottom: '10',
            data: ['青少年', '父母亲', '老年辈']
          },
          series: [{
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            // 雷达实体属性值
            data: [
              {
                value: [14, 20, 50, 75, 80],
                name: '青少年'
              },
              {
                value: [35, 70, 75, 45, 60],
                name: '父母亲'
              },
              {
                value: [57, 55, 75, 25, 40],
                name: '老年辈'
              }
            ],
            animationDuration: animationDuration
          }]
        })
      }
    }
  }
</script>
