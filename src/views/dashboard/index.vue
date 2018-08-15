<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import adminDashboard from './admin'
  import editorDashboard from './editor'

  export default {
    name: 'dashboard',
    components: { adminDashboard, editorDashboard },
    data() {
      return {
        currentRole: 'adminDashboard'
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    created() {
      if (!this.roles.includes('admin')) {
        this.currentRole = 'editorDashboard'
      }
    }
  }
</script>


<!--<template>-->
<!--<div class="dashboard-container">-->
<!--<div class="dashboard-text">name:{{name}}</div>-->
<!--<div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapGetters } from 'vuex'-->

<!--export default {-->
<!--name: 'dashboard',-->
<!--computed: {-->
<!--...mapGetters([-->
<!--'name',-->
<!--'roles'-->
<!--])-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--.dashboard {-->
<!--&-container {-->
<!--margin: 30px;-->
<!--}-->
<!--&-text {-->
<!--font-size: 30px;-->
<!--line-height: 46px;-->
<!--}-->
<!--}-->
<!--</style>-->
