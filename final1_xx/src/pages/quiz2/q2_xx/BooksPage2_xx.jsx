import Wrapper from '../../../assets/wrappers/Books_xx';
import Booklist2_xx from './Booklist2_xx';
import { BooksContextProvider_xx } from './book2Context_xx';

const BooksPage2_xx = () => {
  return (
    <BooksContextProvider_xx>
      <Wrapper>
        <Booklist2_xx />
      </Wrapper>
    </BooksContextProvider_xx>
  );
};
export default BooksPage2_xx;
