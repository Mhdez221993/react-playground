import { render, screen } from "@testing-library/react"

import Greet from "./Greet"

test('Greet component render correctly', () => {
  render(<Greet />)
  const greet = screen.getByText(/greet component/i)
  expect(greet).toBeInTheDocument()
})
