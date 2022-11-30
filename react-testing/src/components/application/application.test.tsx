import { render, screen } from "@testing-library/react"

import { Application } from "./Application"

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />)

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationelement = screen.getByRole('combobox')
    expect(jobLocationelement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })
})
