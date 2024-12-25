import { useState, useEffect } from 'react'

import menu_data from './menu_data'
import MenuList_23 from './MenuList3_xx'

const FilterButtons3_xx = () => {
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
        <MenuList_23 menu={menu} />
      </div>
    </>
  )
}
export default FilterButtons3_xx
