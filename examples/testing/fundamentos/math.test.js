const { sum, substract } = require('./math')

/* describe('testiando numeros', () => {
  test('mi primer test', () => {
    expect(1).toBe(1)
  })
})

describe('testiando bolleanos', () => {

  xtest('mi segundo test', () => {
    expect(true).toBeTruthy()
  })

  test('mi tercer test', () => {
    expect(false).toBeFalsy()
  })
}) */

describe('module math', () => {
  test('Sum two numbers', () => {
    const expected = 10
    const result = sum(3, 7)
    expect(result).toBe(expected)
  })
  
  
  test('Substract two number', () => {
    const expected = 4
    const result = substract(7, 3)
    expect(result).toBe(expected)
  })
})