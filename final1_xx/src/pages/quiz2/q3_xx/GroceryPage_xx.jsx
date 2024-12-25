import Form_xx from './Form_xx';
import Items_xx from './Items_xx';
import { GroceryContextProvider_xx } from './contextGrocery_xx';
import Wrapper from '../../../assets/wrappers/Grocery_xx';

const GroceryPage_xx = () => {
  return (
    <GroceryContextProvider_xx>
      <Wrapper>
        <section className='section-center'>
          <Form_xx />
          <Items_xx />
        </section>
      </Wrapper>
    </GroceryContextProvider_xx>
  );
};

export default GroceryPage_xx;
