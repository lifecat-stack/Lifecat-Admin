import request from '@/utils/request'

// 获取消费列表
export function fetchList(query) {
  return request({
    url: '/transactions',
    method: 'get',
    params: query
  })
}
