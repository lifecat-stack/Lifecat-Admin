<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>

</template>

<script>
  require('echarts')
  require('echarts-wordcloud')

  import echarts from 'echarts'
  import resize from './mixins/resize'
  // import { getAccessDeviceHeatChart } from '@/api/datachart'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data() {
      return {
        list: null,
        listLoading: true,
        specificData: [],
        chart: null
      }
    },
    created() {
      // this.listLoading = true
      // getAccessDeviceHeatChart().then(response => {
      //   console.table('res' + response.data.data)
      //   this.list = response.data.data
      //   this.listLoading = false
      // })
      //
      // for (let i = 0; i < 12; i++) {
      //   this.specificData[i] = this.list[i].currentHourCount
      // }
      //
      // console.table('fasdddddddddddd' + this.specificData)
    },
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        function createRandomItemStyle() {
          return {
            normal: {
              color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          }
        }

        this.chart = echarts.init(document.getElementById(this.id))

        this.chart.setOption({
          title: {
            text: 'Google Trends',
            link: 'http://www.google.com/trends/hottrends'
          },
          tooltip: {
            show: true
          },
          series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: [
              {
                name: '朝九晚五',
                value: 10000,
                textStyle: {
                  normal: {
                    color: 'black'
                  }
                }
              },
              {
                name: '工作繁忙',
                value: 6181,
                textStyle: createRandomItemStyle()
              },
              {
                name: '出差频繁',
                value: 4386,
                textStyle: createRandomItemStyle()
              },
              {
                name: '访问频次高',
                value: 4055,
                textStyle: createRandomItemStyle()
              },
              {
                name: '忙碌工作',
                value: 2467,
                textStyle: createRandomItemStyle()
              },
              {
                name: '门禁达人',
                value: 2244,
                textStyle: createRandomItemStyle()
              },
              {
                name: '朋友圈',
                value: 1898,
                textStyle: createRandomItemStyle()
              },
              {
                name: '宅',
                value: 1484,
                textStyle: createRandomItemStyle()
              },
              {
                name: '高购买力人群',
                value: 1112,
                textStyle: createRandomItemStyle()
              },
              {
                name: '倾向于待在家里',
                value: 965,
                textStyle: createRandomItemStyle()
              },
              {
                name: '在外时间长',
                value: 847,
                textStyle: createRandomItemStyle()
              },
              {
                name: '黄金会员',
                value: 582,
                textStyle: createRandomItemStyle()
              },
              {
                name: '居家达人',
                value: 555,
                textStyle: createRandomItemStyle()
              },
              {
                name: '居住:江南大学',
                value: 550,
                textStyle: createRandomItemStyle()
              },
              {
                name: '运营商:移动',
                value: 462,
                textStyle: createRandomItemStyle()
              },
              {
                name: '门禁忠实用户',
                value: 366,
                textStyle: createRandomItemStyle()
              }
            ]
          }]
        })
      }
    }
  }
</script>
