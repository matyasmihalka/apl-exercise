// import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { Header } from '.'

describe('[UI] Header', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON()

    expect(tree).toMatchSnapshot()

    // console.log(screen.getAllByDisplayValue('About'))
    // expect(screen.getAllByDisplayValue('About'))
    // expect(screen.getByRole("heading", { name: /location search/i })
    //     ).toBeVisible();
    // console.log('test running')
  })

  // it('should render header', () => {
  //   render(<Header />)

  //   console.log(screen.getByRole('navigation'))
  //   expect(screen.getByRole('navigation')).toHaveTextContent(/Recent Articles/)
  // })
})
