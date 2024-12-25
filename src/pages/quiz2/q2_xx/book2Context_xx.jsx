import { createContext, useContext, useState } from 'react';
import books_data from './booklist_data';

// console.log('books_data', books_data);

const BooksContext_xx = createContext();

export const BooksContextProvider_xx = ({ children }) => {
  const [books, setBooks] = useState(books_data);

  return (
    <BooksContext_xx.Provider value={{ books }}>
      {children}
    </BooksContext_xx.Provider>
  );
};

export const useBooksContext_xx = () => {
  return useContext(BooksContext_xx);
};
