import { useGroceryContext_xx } from './contextGrocery_xx';

const SingleItem_xx = ({ item }) => {
  const { removeItem, editItem } = useGroceryContext_xx();
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem_xx;
