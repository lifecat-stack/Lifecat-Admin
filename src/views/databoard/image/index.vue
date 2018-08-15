<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>

      <!--userId-->
      <el-table-column label='ID' width="95" align="center">
        <template slot-scope="scope">
          {{scope.row.userId}}
        </template>
      </el-table-column>

      <!--userAccountName-->
      <el-table-column label="用户名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userAccountName}}</span>
        </template>
      </el-table-column>

      <!--userName-->
      <el-table-column label="昵称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>

      <!--userSex-->
      <el-table-column label="性别" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userSex}}</span>
        </template>
      </el-table-column>

      <!--userEmail-->
      <el-table-column label="邮箱" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userEmail}}</span>
        </template>
      </el-table-column>

      <!--userLocation-->
      <el-table-column label="所在位置" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userLocation}}</span>
        </template>
      </el-table-column>

      <!--userPhoneNumber-->
      <el-table-column label="电话号码" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userPhoneNumber}}</span>
        </template>
      </el-table-column>

      <!--userGmtCreate-->
      <el-table-column label="注册时间" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userGmtCreate}}</span>
        </template>
      </el-table-column>

      <!--userLastLogin-->
      <el-table-column label="最后登录" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userLastLogin}}</span>
        </template>
      </el-table-column>

      <!--userLoginCount-->
      <el-table-column label="访问次数" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userLoginCount}}</span>
        </template>
      </el-table-column>

      <!--isUserDeleted-->
      <el-table-column label="启用状态" width="110" align="center" class-name="status-col">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isUserDeleted | statusFilter">{{scope.row.isUserDeleted}}</el-tag>
        </template>
      </el-table-column>

      <!--userRole-->
      <el-table-column label="权限" width="100" align="center" class-name="status-col">
        <template slot-scope="scope">
          <el-tag :type="scope.row.userRole | statusFilter">{{scope.row.userRole}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Actions" min-width="200" align="center" prop="created_at">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { getUserList } from '@/api/databoard'

  export default {
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getUserList().then(response => {
          console.log('res' + response.data.userList)
          this.list = response.data.userList
          this.listLoading = false
        })
      }
    }
  }
</script>
