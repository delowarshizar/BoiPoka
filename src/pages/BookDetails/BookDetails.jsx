import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const ClickBook = parseInt(id);
  const bookData = useLoaderData();
  const bookDetails = bookData.find((book) => book.bookId === ClickBook);
  const { image, bookName } = bookDetails;
  return (
    <div>
      <img src={image} alt={bookName} />
      <h1 className="text-3xl font-bold text-center my-6">{bookName}</h1>
    </div>
  );
};

export default BookDetails;
