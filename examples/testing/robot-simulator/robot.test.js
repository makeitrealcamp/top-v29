const createRobot = require('./robot.js');

describe('createRobot', () => {

	test('Should return error with message invalid orientation', () => {
    const myRobot = createRobot([2, 1], 'Nort')
    expect(myRobot.message).toMatch(/invalid orientation/i)
	});

	test('Should return error message with invalid coordinates', () => {
    const myRobot = createRobot([11, 1], 'North')
    expect(myRobot.message).toMatch(/invalid coordinates/i)
	});

	test('Should return place correctly', () => {
    const myRobot = createRobot([1, 1], 'North')
    expect(myRobot.message).toMatch(/robot created successfully/i)
	});

});

describe('getPosition', () => {

  test('Should return error message with out of limits', () => {
    const myRobot = createRobot([11, 1], 'South')
    const result = myRobot.getPosition()
    expect(result).toMatch(/Out of limits/i)
  })

  test('Should return place correctly', () => {
    const myRobot = createRobot([5, 3], 'South')
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [5, 3], orientation: 'South' })
  })

})

describe('advance', () => {

    test('Should advance with coordinates [3, 6] and orientation "North" and return coordinate [3, 7]', () => {
      const myRobot = createRobot([3, 6], 'North')
      myRobot.advance()
      const result = myRobot.getPosition()
      expect(result).toMatchObject({ coordinates: [3, 7], orientation: 'North' })
    })

    test('Should advance with coordinates [2, 1] and orientation "South" and return coordinate [3, 0]', () => {
      const myRobot = createRobot([2, 1], 'South')
      myRobot.advance()
      const result = myRobot.getPosition()
      expect(result).toMatchObject({ coordinates: [2, 0], orientation: 'South' })
    })

    test('Should advance with coordinates [9,4] and orientation "East" and return coordinate [10, 4]', () => {
      const myRobot = createRobot([9, 4], 'East')
      myRobot.advance()
      const result = myRobot.getPosition()
      expect(result).toMatchObject({ coordinates: [10, 4], orientation: 'East' })
    })

    test('Should advance with coordinates [6, 7] and orientation "West" and return coordinate [5, 7]', () => {
      const myRobot = createRobot([6, 7], 'West')
      myRobot.advance()
      const result = myRobot.getPosition()
      expect(result).toMatchObject({ coordinates: [5, 7], orientation: 'West' })
    })
})