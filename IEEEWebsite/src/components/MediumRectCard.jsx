import React from "react";

const MediumRectCard = ({ title, description, icon}) => {
  return (
    <div className="w-130 h-65 bg-Smoke-Orange border-2 rounded-2xl border-white flex flex-row shadow-lg">
      <div className="w-full h-full flex flex-row gap-3 p-5">
        <div className="w-15 h-15 bg-IEEE-Blue rounded-2xl flex items-center justify-center">
          <img
            className="w-7 h-7"
            src={icon}
            alt=""
          />
        </div>
        <div className="w-90 flex flex-col gap-2 ">
          <h1 className="text-white text-2xl font-bold">
            {title}
          </h1>
          <p className="text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediumRectCard;
