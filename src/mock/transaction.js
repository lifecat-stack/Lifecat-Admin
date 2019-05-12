import Mock from 'mockjs'

const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    order: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: Mock.Random.cname(),
    price: '@int(100, 500, 0, 2)',
    'status|1': ['外出', '滞留']
  }))
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List
    }
  }
}
