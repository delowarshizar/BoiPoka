import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
const Book = ({ book }) => {
  const { image, bookName, author, rating, category, bookId, tags } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 h-120 shadow-sm p-6 border border-gray-200">
        <figure className="bg-gray-100 p-8 rounded-2xl ">
          <img className="h-42 " src={image} alt="Book Cover" />
        </figure>
        <div className="card-body">
          <div className=" flex gap-3">
            {tags.map((tag) => (
              <div
                className="bg-gray-100 rounded-lg font-medium text-md text-green-500 px-4 py-1 "
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="font-bold text-2xl my-2">{bookName}</h2>
          <p className="font-medium text-lg text-[#131313] opacity-80">
            by : {author}
          </p>
        <div className="border-t-2 border-dashed border-gray-300"></div>
          <div className=" text-[#131313] opacity-80 flex justify-between font-medium text-lg ">
            <div>{category}</div>
            <div className=" flex gap-2 items-center ">
              <div>{rating}</div>
              <FaStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
