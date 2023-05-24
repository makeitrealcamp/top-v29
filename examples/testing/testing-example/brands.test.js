const { findOneByBrand, filterByBrand } = require('./brands')


describe('findOneByBrand', () => {

  test('should return an empty array if no brand found', () => {
    // Arrange
    const expected = []
    //Act
    const result = findOneByBrand('test')
    //Assert
    expect(result).toEqual(expected)
  })
  
  test('should return an object with the brand', () => {
    // Arrange 
    const expected = { brand: 'Toyota', price: 2074, model: 2009 }
    //Act
    const result = findOneByBrand('Toyota')
    //Assert
    expect(result).toEqual(expected)
    
  })
})

// Para cuando hay error -> Ingresar una marca que no existe
// Para cuando acierta -> Ingresar una marca que si existe

