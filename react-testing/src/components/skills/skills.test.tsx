import { render, screen } from '@testing-library/react'

import Skills from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Ruby', 'JS']

  test('get by role list (ul)', () =>{
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('get all by role (li)', () =>{
    render(<Skills skills={skills} />)
    const listElements = screen.getAllByRole('listitem')
    expect(listElements).toHaveLength(skills.length)
  })
})
