import { render, screen } from "@testing-library/react"

import Users from "./Users"

describe('Users', () => {
  test('renders correctly', async () => {
    render(<Users />)

    const textElement = screen.getByRole('heading', {level: 1})
    expect(textElement).toBeInTheDocument()
  })
})
