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
import MenuItem_23 from './MenuItem2_xx'
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
              <div class='title'>
                <h2>S2Page_23: 余忠憲, 912410023</h2>
                <div class='underline'></div>
              </div>
              <div className='btn-container'>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='all'
                  onClick={() => changeMenuFilter('')}
                >
                  all
                </button>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='breakfast'
                  onClick={() => changeMenuFilter('breakfast')}
                >
                  breakfast
                </button>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='lunch'
                  onClick={() => changeMenuFilter('lunch')}
                >
                  lunch
                </button>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='dessert'
                  onClick={() => changeMenuFilter('dessert')}
                >
                  dessert
                </button>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='shakes'
                  onClick={() => changeMenuFilter('shakes')}
                >
                  shakes
                </button>
              </div>
              <div className='section-center'>
                {menu?.map((item) => {
                  const { id, img, title, price, category, descrip } = item
                  return (
                    <MenuItem_23
                      key={id}
                      id={id}
                      img={img}
                      title={title}
                      category={category}
                      price={price}
                      descrip={descrip}
                    />
                  )
                })}
              </div>
            </section>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
export default S2Page_23
