import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import MenuItem_23 from './MenuItem1_xx'
import menu_data from './menu_data'

const S1Page_23 = () => {
  const [menu, setMenu] = useState([])
  const fetchData = async () => {
    try {
      setMenu(menu_data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {' '}
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <div class='title'>
                <h2>final余忠憲 912410023</h2>
                <div class='underline'></div>
              </div>
              <div className='btn-container'>
                <button type='button' className='filter-btn' data-id='all'>
                  all
                </button>
                <button
                  type='button'
                  className='filter-btn'
                  data-id='breakfast'
                >
                  breakfast
                </button>
                <button type='button' className='filter-btn' data-id='lunch'>
                  lunch
                </button>
                <button type='button' className='filter-btn' data-id='dessert'>
                  dessert
                </button>
                <button type='button' className='filter-btn' data-id='shakes'>
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
export default S1Page_23
