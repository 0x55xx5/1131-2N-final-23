import SingleItem_xx from './SingleItem_xx';
import { useGroceryContext_xx } from './contextGrocery_xx';

const Items_xx = () => {
  const { items } = useGroceryContext_xx();
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_xx;
