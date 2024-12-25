import Book2_xx from './Book2_xx';
import { useBooksContext_xx } from './book2Context_xx';

const Booklist2_xx = () => {
  const { books } = useBooksContext_xx();
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id, img, title, author } = book;
        return <Book2_xx key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist2_xx;
