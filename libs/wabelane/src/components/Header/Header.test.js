import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  it('is defined', () => {
    console.log(shallow(<Header />).debug())
    expect(Header).toBeDefined()
  })
})
