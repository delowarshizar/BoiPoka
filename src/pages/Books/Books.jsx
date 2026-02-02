import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading books...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
