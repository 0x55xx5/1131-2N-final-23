/*import { useState, useEffect } from 'react';
import Wrapper from '../../../assets/wrappers/Menu_xx';
import menu_data from './menu_data';

const S3Page_xx = () => {
  return (
    <Wrapper>
      <section className='menu-demo'>
        <h1>S3Page_xx</h1>
      </section>
    </Wrapper>
  );
};

export default S3Page_xx;*/

/*import { useState, useEffect } from 'react';
import Wrapper from '../../../assets/wrappers/Menu_xx';
import menu_data from './menu_data';

const S2Page_xx = () => {
  return (
    <Wrapper>
      <section className='menu-demo'>
        <h1>S2Page_xx</h1>
      </section>
    </Wrapper>
  );
};
export default S2Page_xx;*/

import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'

import FilterButtons3_xx from './FilterButtons3_xx'

import menu_data from './menu_data'

const S2Page_23 = () => {
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState('')

  const fetchMenuByCategory = async () => {
    try {
      if (category === '') {
        setMenu(menu_data)
      } else {
        let f_menu_data = menu_data.filter((itm) => itm.category == category)
        console.log(f_menu_data)
        setMenu(f_menu_data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuByCategory()
  }, [category])

  const changeMenuFilter = (category) => {
    setCategory(category)
  }

  return (
    <>
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <FilterButtons3_xx />
            </section>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
export default S2Page_23
