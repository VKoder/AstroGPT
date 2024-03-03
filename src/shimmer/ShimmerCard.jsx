import React from "react";

const ShimmerCard = () => {
  return (
    <div className="h-36 bg-zinc-700 w-[100%] lg:w-[30%] rounded-lg px-2 gap-3 py-2 flex flex-row justify-between items-start">
      <div className="w-4/12 h-full flex justify-center items-center">
        <span className="rounded-full bg-gray-800  w-[90%] h-[70%] stroke animate"></span>
      </div>
      <div className="w-8/12 flex flex-col  justify-center gap-2 items-start h-full">
        <span className="h-4 rounded-xl bg-gray-800 stroke animate w-44"></span>
        <span className="h-4 rounded-xl bg-gray-800 stroke animate w-36"></span>
        <span className="h-4 rounded-xl bg-gray-800 stroke animate w-32"></span>
      </div>
    </div>
  );
};

export default ShimmerCard;
