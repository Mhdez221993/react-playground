import { render, screen } from "@testing-library/react"

import Greet from "./Greet"

test('Greet component render correctly', () => {
  render(<Greet />)
  const greet = screen.getByText('Hello')
  expect(greet).toBeInTheDocument()
})

test('Greet component render Hello Doe', () => {
  render(<Greet name="Doe" />)
  const greet = screen.getByText('Hello Doe')
  expect(greet).toBeInTheDocument()
})
