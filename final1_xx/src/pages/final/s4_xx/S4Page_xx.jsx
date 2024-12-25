import Wrapper from '../../../assets/wrappers/Menu_xx'
import FilterButtons4_xx from './FilterButtons4_xx'
import MenuList4_xx from './MenuList4_xx'

import { MenuContextProvider_xx } from './contextMenu_xx'

const S4Page_xx = () => {
  return (
    <MenuContextProvider_xx>
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <div className='title'>
                <h2>S2Page_23: 余忠憲, 912410023</h2>
                <div className='underline'></div>
              </div>
              <FilterButtons4_xx />
              <MenuList4_xx />
            </section>
          </div>
        </section>
      </Wrapper>
    </MenuContextProvider_xx>
  )
}

export default S4Page_xx
