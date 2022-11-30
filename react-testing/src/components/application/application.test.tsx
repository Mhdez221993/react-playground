import { render, screen } from "@testing-library/react"

import { Application } from "./Application"

describe('Application', () => {
  test('get by role (texbox, combobox, checkbox)', () => {
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
  })

  test('get by label text (input, checkbox)', () => {
    render(<Application />)

    const nameLabel = screen.getByLabelText('Name')
    expect(nameLabel).toBeInTheDocument()

    const termsLabel = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsLabel).toBeInTheDocument()
  })


  test('get by role (heading)', () => {
    render(<Application />)

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

  test('get by role (button)', () => {
    render(<Application />)

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })

  test('get by placeholder (input)', () => {
    render(<Application />)
    const namePlaceHolder = screen.getByPlaceholderText('Fullname')
    expect(namePlaceHolder).toBeInTheDocument()
  })
})
