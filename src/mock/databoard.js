import Mock from 'mockjs'

const userList = []
const messageList = []
const imageList = []
const dynamicList = []
const count = 100

for (let i = 0; i < count; i++) {
  userList.push(Mock.mock({
    userId: '@increment',
    userAccountName: '@title(5, 10)',
    userName: '@first',
    userSex: '男',
    userEmail: +Mock.Random.date('T'),
    userLocation: '中国，无锡',
    userGmtCreate: '@datetime',
    userPhoneNumber: 18812345678,
    userLastLogin: '@datetime',
    userLoginCount: '@datetime',
    isUserDeleted: false,
    userRole: 'user'
  }))

  messageList.push(Mock.mock({
    userId: '@increment',
    userAccountName: '@title(5, 10)',
    userName: '@first',
    userSex: '男',
    userEmail: +Mock.Random.date('T'),
    userLocation: '中国，无锡',
    userGmtCreate: '@datetime',
    userPhoneNumber: 18812345678,
    userLastLogin: '@datetime',
    userLoginCount: '@datetime',
    isUserDeleted: false,
    userRole: 'user'
  }))

  imageList.push(Mock.mock({
    userId: '@increment',
    userAccountName: '@title(5, 10)',
    userName: '@first',
    userSex: '男',
    userEmail: +Mock.Random.date('T'),
    userLocation: '中国，无锡',
    userGmtCreate: '@datetime',
    userPhoneNumber: 18812345678,
    userLastLogin: '@datetime',
    userLoginCount: '@datetime',
    isUserDeleted: false,
    userRole: 'user'
  }))

  dynamicList.push(Mock.mock({
    userId: '@increment',
    userAccountName: '@title(5, 10)',
    userName: '@first',
    userSex: '男',
    userEmail: +Mock.Random.date('T'),
    userLocation: '中国，无锡',
    userGmtCreate: '@datetime',
    userPhoneNumber: 18812345678,
    userLastLogin: '@datetime',
    userLoginCount: '@datetime',
    isUserDeleted: false,
    userRole: 'user'
  }))
}

export default {
  getUserList: () => ({
    userList: userList
  }),

  getMessageList: () => ({
    messageList: messageList
  }),

  getImageList: () => ({
    imageList: imageList
  }),

  getDynamicList: () => ({
    dynamicList: dynamicList
  })
}
