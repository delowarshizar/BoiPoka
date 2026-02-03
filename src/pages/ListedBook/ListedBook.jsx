import React, { useEffect, useState } from "react";
import {
  GetDataFromLocalStorage,
  GetDataFromLocalStorageWish,
} from "../../utilities/Store";
import Book from "../Book/Book";
import { useLoaderData } from "react-router";

const ListedBook = () => {
  const BookData = useLoaderData();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const readBooks = GetDataFromLocalStorage();
    const wishlist = GetDataFromLocalStorageWish();
    const ConvertedWishlistBooks = wishlist.map((id) => parseInt(id));
    const ConvertedReadBooks = readBooks.map((id) => parseInt(id));
    const filteredBooks = BookData.filter((book) =>
      ConvertedReadBooks.includes(book.bookId),
    );
    const filteredWishlistBooks = BookData.filter((book) =>
      ConvertedWishlistBooks.includes(book.bookId),
    );
    setWishlistBooks(filteredWishlistBooks);
    setFilteredBooks(filteredBooks);
  }, []);
  return (
    <div>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="text-2xl font-bold">
            {filteredBooks.length} Books Read
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="text-2xl font-bold">
            {wishlistBooks.length} Books in Wishlist
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
