import { render, screen } from "@testing-library/react"

import { Application } from "./Application"

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />)

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    })
    expect(nameElement).toBeInTheDocument()

    const nameLabel = screen.getByLabelText('Name')
    expect(nameLabel).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationelement = screen.getByRole('combobox')
    expect(jobLocationelement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsLabel = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsLabel).toBeInTheDocument()

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()

    const pageHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Job application form'
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Section 1'
    })
    expect(sectionHeading).toBeInTheDocument()
  })
})
