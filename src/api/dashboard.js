import request from '@/utils/request'

// 测试跨域访问后端
export function getTestAll() {
  return request({
    url: '/api/test/all',
    method: 'get'
  })
}

export function getAccessChart() {
  return request({
    url: '/accesses',
    method: 'get'
  })
}

export function getActivityChart() {
  return request({
    url: '/activities',
    method: 'get'
  })
}

export function getConsumptionChart() {
  return request({
    url: '/consumptions',
    method: 'get'
  })
}
