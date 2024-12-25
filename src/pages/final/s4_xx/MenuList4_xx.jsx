import MenuItem_23 from './MenuItem4_xx'
import { useMenuContext_xx } from './contextMenu_xx'

const MenuList_23 = ({ menu_data }) => {
  // const { menu_data } = useMenuContext_xx()
  return (
    <div className='section-center'>
      {menu_data?.map((item) => {
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
