import React from "react";

const ListedBook = () => {
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
          Read Books
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
