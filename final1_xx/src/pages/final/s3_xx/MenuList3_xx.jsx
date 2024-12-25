/*import MenuItem3_xx from './MenuItem3_xx';

const MenuList3_xx = ({ menu }) => {
  return (
    <div className='section-center'>
      <h1>MenuList3_xx</h1>
    </div>
  );
};
export default MenuList3_xx;*/

import MenuItem_23 from './MenuItem3_xx'

const MenuList_23 = ({ menu }) => {
  return (
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
  )
}
export default MenuList_23
