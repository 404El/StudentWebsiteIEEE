import React from "react";
import ImageCard from "../components/ImageCard";

const UpcomingBattles = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center px-15 py-20 gap-15">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col">
          <p className="bg-IEEE-Blue text-white px-4 py-2 w-45 rounded-full font-bold uppercase">
            Next Campaigns
          </p>
          <h1 className="text-IEEE-Blue text-3xl font-bold uppercase">
            Upcoming Battles
          </h1>
        </div>
        <a href="/" className="flex flex-row items-center gap-1 text-IEEE-Orange font-bold uppercase">
            View All
            <img
              src="../../src/assets/rightOrangeArrow.png"
              alt="Arrow Icon"
              className=" w-5 h-5"
            />
          </a>
      </div>

      <div className="flex flex-row items-center justify-center gap-10">
        <ImageCard date="March 15, 2026" title="HACKATHON" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!" img="../../src/assets/hackathonImg.png"/>
        <ImageCard date="March 22, 2026" title="PCB Design Bootcamp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!" img="../../src/assets/pcbImg.png"/>
        <ImageCard date="April 5, 2026" title="Tech Titans Summit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde ad et corporis! Officia, sint eveniet delectus accusantium ullam vel temporibus! Cumque sed nesciunt placeat fuga. Repudiandae, officia! Est, voluptas!" img="../../src/assets/summitImg.png"/>

      </div>
    </div>
  );
};

export default UpcomingBattles;
