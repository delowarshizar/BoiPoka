import React from "react";
import BannerImage from "../../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImage} />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
