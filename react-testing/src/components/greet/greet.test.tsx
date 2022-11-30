import { render, screen } from "@testing-library/react"

import Greet from "./Greet"

describe('Greet', () => {
  test('render correctly', () => {
    render(<Greet />)
    const greet = screen.getByText('Hello')
    expect(greet).toBeInTheDocument()
  })

  // test('renders a name', () => {
  //   render(<Greet name="Doe" />)
  //   const greet = screen.getByText('Hello Doe')
  //   expect(greet).toBeInTheDocument()
  // })
})
