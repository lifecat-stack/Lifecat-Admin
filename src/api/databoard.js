import request from '@/utils/request'

export function getUserList() {
  return request({
    url: '/user/all',
    method: 'get'
  })
}

export function getMessageList() {
  return request({
    url: '/message/all',
    method: 'get'
  })
}

export function getImageList() {
  return request({
    url: '/image/all',
    method: 'get'
  })
}

export function getDynamicList() {
  return request({
    url: '/record/all',
    method: 'post'
  })
}
