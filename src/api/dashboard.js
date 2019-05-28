import request from '@/utils/request'

const baseUrl = '/basic'

export function getBasicCount(communityId) {
  return request({
    url: baseUrl + '/count?communityId=' + communityId,
    method: 'get'
  })
}

export function getBasicLabelCount(communityId) {
  return request({
    url: baseUrl + '/label/count?communityId=' + communityId,
    method: 'get'
  })
}

export function getBasicDeviceCount(communityId) {
  return request({
    url: baseUrl + '/device/count?communityId=' + communityId,
    method: 'get'
  })
}

export function getBasicDeviceWeekend(communityId) {
  return request({
    url: baseUrl + '/device/weekend?communityId=' + communityId,
    method: 'get'
  })
}

export function getBasicPersonMostTable(communityId) {
  return request({
    url: baseUrl + '/table/personMost?communityId=' + communityId,
    method: 'get'
  })
}

export function getBasicDeviceRepairTable(communityId) {
  return request({
    url: baseUrl + '/table/deviceRepair?communityId=' + communityId,
    method: 'get'
  })
}
