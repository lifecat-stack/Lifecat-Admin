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
      line1: '用户访问量',
      line2: '用户注册量',
      line1Data: [100, 120, 161, 134, 105, 160, 165],
      line2Data: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      line1: '邮件通知',
      line2: '微信推送',
      line1Data: [200, 192, 120, 144, 160, 130, 140],
      line2Data: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      line1: '图片数量',
      line2: '相册数量',
      line1Data: [80, 100, 121, 104, 105, 90, 100],
      line2Data: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      line1: '新发动态',
      line2: '评论数目',
      line1Data: [130, 140, 141, 142, 145, 150, 160],
      line2Data: [120, 82, 91, 154, 162, 140, 130]
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
