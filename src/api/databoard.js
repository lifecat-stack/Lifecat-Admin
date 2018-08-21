import request from '@/utils/request'

// 获取user列表
export function getUserList() {
  return request({
    url: '/users',
    method: 'get'
  })
}

// 获取message列表
export function getMessageList() {
  return request({
    url: '/messages',
    method: 'get'
  })
}

// 获取image列表
export function getImageList() {
  return request({
    url: '/images',
    method: 'get'
  })
}

// 获取dynamic列表
export function getDynamicList() {
  return request({
    url: '/records',
    method: 'get'
  })
}
