import React from "react";
import BannerImage from "../../assets/pngwing 1.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="hero bg-base-200 h-\[554px\]">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between">
        <img className="" src={BannerImage} />
        <div className="max-w-131">
          <h1 className="text-6xl font-bold ">
            Books to freshen up your bookshelf
          </h1>

          <Link
            className="btn w-48 rounded-lg bg-green-500 text-amber-50 text-[16px] mt-12 font-bold"
            to="/listedBooks"
          >
            View Listed Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
