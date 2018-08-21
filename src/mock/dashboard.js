import Mock from 'mockjs'

const testList = []

testList.push(Mock.mock({
  testId: 1,
  testName: 'test'
}))

export default {
  getTestAll: () => ({
    testList: testList
  })
}
