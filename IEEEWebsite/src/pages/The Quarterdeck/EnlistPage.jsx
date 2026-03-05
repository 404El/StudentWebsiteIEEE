import React from "react";


const EnlistPage = () => {
  return (
    <div>
      <div className="h-2 w-full bg-IEEE-Orange"></div>
      <div className="bg-IEEE-Blue h-auto flex flex-col items-center justify-center py-15 gap-5">
        <h1 className="text-white text-6xl font-extrabold uppercase text-center">
          Ready to Join the <span className="text-IEEE-Orange">Legion</span>?
        </h1>
        <p className="text-white max-w-xl text-center font-bold ">
          Become part of VSU's elite engineering force. The Trojan army is
          recruiting motivated students ready to change the world.
        </p>
        <a
          href="/"
          className="text-white bg-IEEE-Orange flex flex-row justify-center items-center uppercase font-bold px-5 py-3 rounded-2xl mt-5 gap-2"
        >
          Enlist Today
          <img className="w-10" src="../../src/assets/rightArrow.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default EnlistPage;
