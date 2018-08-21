<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="订单" min-width="200">
      <template slot-scope="scope">
        {{scope.row.order | orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="客户" min-width="200">
      <template slot-scope="scope">
        {{scope.row.username | orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="价格" width="195" align="center">
      <template slot-scope="scope">
        ¥{{scope.row.price | toThousandslsFilter}}
      </template>
    </el-table-column>
    <el-table-column label="状态" width="100" align="center">
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
          pending: 'danger'
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
