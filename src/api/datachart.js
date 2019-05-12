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

// 获取门禁
export function getAccessDeviceHeatChart() {
  return request({
    url: '/access/device/heat?imei=2b6844b892724363a00083cf01d448a7',
    method: 'get'
  })
}
