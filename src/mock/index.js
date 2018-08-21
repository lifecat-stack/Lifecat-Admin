import Mock from 'mockjs'
import transactionAPI from './transaction'
import loginAPI from './login'
import databoardAPI from './databoard'
// import dashboardAPI from './dashboard'

// Mock.setup({
//   timeout: '350-600'
// })

// Mock.mock(/\/test\/all/, 'get', dashboardAPI.getTestAll)

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/infos\.*/, 'get', loginAPI.getUserInfo)

// 数据相关
// 获取所有user
Mock.mock(/\/users/, 'get', databoardAPI.getUserList)
// 获取所有message
Mock.mock(/\/messages/, 'get', databoardAPI.getMessageList)
// 获取所有image
Mock.mock(/\/images/, 'get', databoardAPI.getImageList)
// 获取所有record
Mock.mock(/\/records/, 'get', databoardAPI.getDynamicList)

// 统计表相关
Mock.mock(/\/transactions/, 'get', transactionAPI.getList)

export default Mock
