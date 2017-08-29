const hello = require('./hello')
test ('hello',() => {
  //Arrange
  let name ='Bell'
  //Act
  let result = hello(name)
  //Assert
  expect(result).toBe('Hello Bell')
})
