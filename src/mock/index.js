import Mock from 'mockjs'
import transactionAPI from './transaction'
import loginAPI from './login'
import databoardAPI from './databoard'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 数据相关
// 获取所有user
Mock.mock(/\/user\/all/, 'get', databoardAPI.getUserList)
// 获取所有message
Mock.mock(/\/message\/all/, 'get', databoardAPI.getMessageList)
// 获取所有image
Mock.mock(/\/image\/all/, 'get', databoardAPI.getImageList)
// 获取所有record
Mock.mock(/\/record\/all/, 'get', databoardAPI.getDynamicList)

// 统计表相关
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock
