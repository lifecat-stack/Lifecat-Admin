<!--指示板-->
<template>
  <div class="dashboard-editor-container">
    <!--github链接-->
    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"></github-corner>

    <!--Panel面板组件-->
    <panel-group
      :communityCount="communityCount"
      :deviceCount="deviceCount"
      :personCount="personCount"
      :recordCount="recordCount"
      @handleSetLineChartData="handleSetLineChartData"></panel-group>

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

  import { getBasicCount } from '@/api/dashboard'
  // import BasicCountData from '@api/entity/dashboardObject'

  // LineChart.chartData数据: setOption()调用
  const lineChartData = {
    communitys: {
      line1: '社区总量',
      line2: '新增社区',
      total: 0,
      line1Data: [],
      line2Data: []
    },
    devices: {
      line1: '设备总量',
      line2: '新增设备',
      total: 0,
      line1Data: [],
      line2Data: []
    },
    persons: {
      line1: '用户总量',
      line2: '用户注册量',
      total: 0,
      line1Data: [],
      line2Data: []
    },
    records: {
      line1: '访问记录总量',
      line2: '新增访问量',
      total: 0,
      line1Data: [],
      line2Data: []
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
        lineChartData: lineChartData.communitys,
        communityCount: 0,
        deviceCount: 0,
        personCount: 0,
        recordCount: 0
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      // 切换LineChart
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      },
      fetchData() {
        getBasicCount('feeca8a4a93d4188ba5b98bdf0c211cd').then(response => {
          const json = response.data.data
          // community
          const communityCountList = json.communityCountList
          const communityTotalDataList = []
          const communityIncreaseDataList = []
          for (let i = communityCountList.length - 1; i >= 0; i--) {
            const total = communityCountList[i].totalCount
            const increase = communityCountList[i].increaseCount
            communityTotalDataList.push(total)
            communityIncreaseDataList.push(increase)
          }
          lineChartData.communitys.line1Data = communityTotalDataList
          lineChartData.communitys.line2Data = communityIncreaseDataList
          this.communityCount = json.communityCount
          // device
          const deviceCountList = json.deviceCountList
          const deviceTotalDataList = []
          const deviceIncreaseDataList = []
          for (let i = deviceCountList.length - 1; i >= 0; i--) {
            const total = deviceCountList[i].totalCount
            const increase = deviceCountList[i].increaseCount
            deviceTotalDataList.push(total)
            deviceIncreaseDataList.push(increase)
          }
          lineChartData.devices.line1Data = deviceTotalDataList
          lineChartData.devices.line2Data = deviceIncreaseDataList
          this.deviceCount = json.deviceCount
          // person
          const personCountList = json.personCountList
          const personTotalDataList = []
          const personIncreaseDataList = []
          for (let i = personCountList.length - 1; i >= 0; i--) {
            const total = personCountList[i].totalCount
            const increase = personCountList[i].increaseCount
            personTotalDataList.push(total)
            personIncreaseDataList.push(increase)
          }
          lineChartData.persons.line1Data = personTotalDataList
          lineChartData.persons.line2Data = personIncreaseDataList
          this.personCount = json.personCount
          // record
          const recordCountList = json.recordCountList
          const recordTotalDataList = []
          const recordIncreaseDataList = []
          for (let i = recordCountList.length - 1; i >= 0; i--) {
            const total = recordCountList[i].totalCount
            const increase = recordCountList[i].increaseCount
            recordTotalDataList.push(total)
            recordIncreaseDataList.push(increase)
          }
          lineChartData.records.line1Data = recordTotalDataList
          lineChartData.records.line2Data = recordIncreaseDataList
          this.recordCount = json.recordCount
        }
        )
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
