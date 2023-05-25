import { getByRole, queryByRole, render, screen } from '@testing-library/react'
import Person from "./Person"
import { faker } from '@faker-js/faker'

test('Should render a name', () => {
  // Arrange
  const expectedName = faker.name.fullName()
  render(<Person fullName={expectedName}/>)

  //Act
  //screen.debug()
  const divElement = screen.getByRole('contentinfo')
  //getBy -> Seguros de que existe 
  //queryBy -> Tal vez existe
  //findBy -> Aparece en algún momento

  //Assert
  expect(divElement).toBeInTheDocument()
  expect(divElement).toHaveTextContent(`Name is ${expectedName}`)
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})