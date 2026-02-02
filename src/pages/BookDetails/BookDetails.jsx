import React from "react";
import { useLoaderData, useParams } from "react-router";
import { SetDataToLocalStorage } from "../../utilities/Store";

const BookDetails = () => {
  const { id } = useParams();
  const ClickBook = parseInt(id);
  const bookData = useLoaderData();
  const bookDetails = bookData.find((book) => book.bookId === ClickBook);
  const { image, bookName } = bookDetails;

  const handleMarksAsRead = (id) => {
    SetDataToLocalStorage(id);
  };
  return (
    <div className="flex">
      <img className="h-141" src={image} alt={bookName} />
      <div>
        <h1 className="text-3xl font-bold text-center my-6">{bookName}</h1>
        <button onClick={() => handleMarksAsRead(id)} className="btn">
          Mark as Read
        </button>
        <button className="btn btn-info">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
