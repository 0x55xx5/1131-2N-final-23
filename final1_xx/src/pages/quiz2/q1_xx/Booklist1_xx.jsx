import Book1_xx from './Book1_xx';
import books_data from './booklist_data';

// console.log('books_data', books_data);

const Booklist1_xx = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book;
        return <Book1_xx key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist1_xx;
