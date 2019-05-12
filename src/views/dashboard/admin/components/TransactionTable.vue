<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="用户ID" min-width="200">
      <template slot-scope="scope">
        {{scope.row.order | orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="用户名" min-width="100">
      <template slot-scope="scope">
        {{scope.row.username | orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="访问次数" width="100" align="center">
      <template slot-scope="scope">
        {{scope.row.price | toThousandslsFilter}}
      </template>
    </el-table-column>
    <el-table-column label="当前状态" width="100" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.status | statusFilter"> {{scope.row.status}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { fetchList } from '@/api/transaction'

  export default {
    data() {
      return {
        list: null
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          success: 'success',
          pending: 'pending'
        }
        return statusMap[status]
      },
      orderNoFilter(str) {
        return str.substring(0, 30)
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        fetchList().then(response => {
          this.list = response.data.items.slice(0, 7)
        })
      }
    }
  }
</script>
