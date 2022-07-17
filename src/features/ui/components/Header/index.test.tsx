import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Header } from '.'

describe('[UI] Header', () => {
  it('should render header', () => {
    render(<Header />)

    const header = screen.getByRole('navigation')
    expect(header).toHaveTextContent('Recent Articles')
    expect(header).toHaveTextContent('About')
    expect(screen.getByText('Log in').closest('a')).toHaveTextContent('Log in')
  })
})
