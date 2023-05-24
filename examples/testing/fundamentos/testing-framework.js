const { sum, substract } = require('./math')
// Assertion

/* function sumTest () {
  const expected = 10
  const result = sum(3, 7)
  expect(result).toBe(expected)
} */

test('Sum two numbers', () => {
  // AAA

  //Arrange
  const expected = 10

  //Act
  const result = sum(3, 7)

  //Assert
  expect(result).toBe(expected)
})

/* function substractTest () {
  const expected = 4
  const result = substract(7, 3)
  expect(result).toBe(expected)
} */
test('Substract two number', () => {
  //Arrange
  const expected = 4
  //Act
  const result = substract(7, 3)
  //Assert
  expect(result).toBe(expected)
})


function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equeal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✅ ${title}`);
  } catch(error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}