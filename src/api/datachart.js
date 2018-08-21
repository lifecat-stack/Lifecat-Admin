import request from '@/utils/request'

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
