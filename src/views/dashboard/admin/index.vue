<!--指示板-->
<template>
  <div class="dashboard-editor-container">
    <!--github链接-->
    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"></github-corner>

    <!--Panel面板组件-->
    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <!--曲线表单-->
      <!--:chart-data: LineChart.charData-->
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

    <el-row :gutter="32">
      <!--雷达图: 用户组分析-->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart></raddar-chart>
        </div>
      </el-col>

      <!--饼状图: 库存图像类别分析-->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>

      <!--直方图: 新建图像类别分析-->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <!--数据列表-->
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}"
              style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>

      <!--记事列表-->
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"
              style="margin-bottom:30px;">
        <todo-list></todo-list>
      </el-col>

      <!--展示列表-->
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"
              style="margin-bottom:30px;">
        <box-card></box-card>
      </el-col>
    </el-row>

  </div>
</template>


<script>
  import GithubCorner from '@/components/GithubCorner'
  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'
  import RaddarChart from './components/RaddarChart'
  import PieChart from './components/PieChart'
  import BarChart from './components/BarChart'
  import TransactionTable from './components/TransactionTable'
  import TodoList from './components/TodoList'
  import BoxCard from './components/BoxCard'

  // LineChart.chartData数据: setOption()调用
  const lineChartData = {
    newVisitis: {
      line1: '社区总量',
      line2: '新增社区',
      line1Data: [1, 1, 1, 1, 2, 2, 2],
      line2Data: [0, 0, 0, 0, 1, 0, 0]
    },
    messages: {
      line1: '设备总量',
      line2: '新增设备',
      line1Data: [11, 13, 14, 15, 17, 18, 19],
      line2Data: [1, 2, 1, 1, 2, 1, 1]
    },
    purchases: {
      line1: '用户总量',
      line2: '用户注册量',
      line1Data: [123, 147, 168, 185, 207, 222, 235],
      line2Data: [22, 24, 21, 17, 22, 15, 13]
    },
    shoppings: {
      line1: '访问记录总量',
      line2: '新增访问量',
      line1Data: [5986, 6212, 6466, 6810, 7071, 7269, 7456],
      line2Data: [233, 226, 254, 344, 261, 198, 187]
    }
  }

  export default {
    name: 'dashboard-admin',
    components: {
      GithubCorner,
      PanelGroup,
      LineChart,
      RaddarChart,
      PieChart,
      BarChart,
      TransactionTable,
      TodoList,
      BoxCard
    },
    data() {
      return {
        // 设置LineChart.数据
        lineChartData: lineChartData.newVisitis
      }
    },
    methods: {
      // 切换LineChart
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
