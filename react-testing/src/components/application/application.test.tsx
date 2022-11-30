import { render, screen } from "@testing-library/react"

import { Application } from "./Application"

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />)
    const nameElement = screen.getByRole('textbox')
    expect(nameElement).toBeInTheDocument()

    const jobLocationelement = screen.getByRole('combobox')
    expect(jobLocationelement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })
})
