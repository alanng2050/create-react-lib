import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Hello } from './Hello'

describe('Hello', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Hello />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should see the text "Hello!"', () => {
    render(<Hello />)
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  })
})
