<!--PASS-->
<template>
  <el-row class="panel-group" :gutter="40">

    <!--用户资料-->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel' @click="handleSetLineChartData('communitys')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">社区资料</div>
          <count-to class="card-panel-num" :startVal="communityCount0" :endVal="communityCount0" :duration="2600"></count-to>
        </div>
      </div>
    </el-col>

    <!--通知信息-->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('devices')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">设备资料</div>
          <count-to class="card-panel-num" :startVal="communityCount0" :endVal="deviceCount0" :duration="3000"></count-to>
        </div>
      </div>
    </el-col>

    <!--图片相册-->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('persons')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="tab" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">用户资料</div>
          <count-to class="card-panel-num" :startVal="communityCount0" :endVal="personCount0" :duration="3200"></count-to>
        </div>
      </div>
    </el-col>

    <!--用户动态-->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('records')">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <svg-icon icon-class="star" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">访问动态</div>
          <count-to class="card-panel-num" :autoplay=true :startVal="communityCount0" :endVal="recordCount0" :duration="3600"></count-to>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  // 动态计数器: startVal->endVal in duration(ms)
  import CountTo from 'vue-count-to'

  export default {
    // 父组件传参
    props: [
      'communityCount',
      'deviceCount',
      'personCount',
      'recordCount'
    ],
    data() {
      return {
        communityCount0: this.communityCount,
        deviceCount0: this.deviceCount,
        personCount0: this.personCount,
        recordCount0: this.recordCount
      }
    },
    components: {
      CountTo
    },
    methods: {
      // 点击Panel之后切换到对应LineChart
      handleSetLineChartData(type) {
        // $emit: 调用父组件函数
        this.$emit('handleSetLineChartData', type)
      }
    },
    // 监听数据变化
    watch: {
      recordCount: {
        deep: true,
        handler(val) {
          // CountTo组件刷新
          this.CountTo.reset()
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col {
      margin-bottom: 32px;
    }
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-people {
          background: #40c9c6;
        }
        .icon-message {
          background: #36a3f7;
        }
        .icon-money {
          background: #f4516c;
        }
        .icon-shoppingCard {
          background: #34bfa3
        }
      }
      .icon-people {
        color: #40c9c6;
      }
      .icon-message {
        color: #36a3f7;
      }
      .icon-money {
        color: #f4516c;
      }
      .icon-shoppingCard {
        color: #34bfa3
      }
      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        float: left;
        font-size: 48px;
      }
      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
</style>
