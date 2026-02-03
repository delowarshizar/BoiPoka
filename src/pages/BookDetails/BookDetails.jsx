import React from "react";
import { useLoaderData, useParams } from "react-router";
import { SetDataToLocalStorage, SetDataToLocalStorageWish } from "../../utilities/Store";

const BookDetails = () => {
  const { id } = useParams();
  const ClickBook = parseInt(id);
  const bookData = useLoaderData();
  const bookDetails = bookData.find((book) => book.bookId === ClickBook);
  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = bookDetails;

  const handleMarksAsRead = (id) => {
    SetDataToLocalStorage(id);
  };
  const handleWishlist = (id) => {
    SetDataToLocalStorageWish(id);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 ">
      <div className="bg-gray-100 rounded-lg">
        <img className="p-18 h-161 w-full " src={image} alt={bookName} />
      </div>
      <div className="px-4">
        <h1 className="text-4xl font-bold ">{bookName}</h1>
        <h3 className="font-medium text-xl mt-4 mb-5 text-gray-500">
          by : {author}
        </h3>
        <div className="border-t-2  border-gray-300"></div>
        <p className="text-lg my-4 font-medium text-gray-500 ">{category}</p>
        <div className="border-t-2  border-gray-300"></div>
        <p className="text-sm font-bold my-6">
          Review:
          <span className="text-gray-500 font-normal"> {review}</span>
        </p>
        <p className="my-6">
          <span className="font-bold mr-4">Tag</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" bg-gray-100 mr-3 font-medium text-green-400 py-2 px-4 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </p>
        <div className="border-t-2 border-gray-300"></div>
        <p className="mt-6">
          Number of Pages: <span className="font-bold ml-15">{totalPages}</span>
        </p>
        <p className="mt-3">
          Publisher: <span className="font-bold ml-30 ">{publisher}</span>
        </p>
        <p className="mt-3">
          Year of Publishing:
          <span className="font-bold ml-15 ">{yearOfPublishing}</span>
        </p>
        <p className="mt-3">
          Rating: <span className="font-bold ml-35">{rating}</span>{" "}
        </p>
        <div className="mt-8">
          <button onClick={() => handleMarksAsRead(id)} className="btn mr-4">
            Mark as Read
          </button>
          <button onClick={() => handleWishlist(id)} className="btn text-amber-50 bg-green-400 border-green-400 hover:bg-green-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
