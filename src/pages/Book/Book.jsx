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
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">
              {tags.map((tag) => (
                <span key={tag} className="mr-1">
                  {tag}
                </span>
              ))}
            </div>
          </h2>
          <p>by : {author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
