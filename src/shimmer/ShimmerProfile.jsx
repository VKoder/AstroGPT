import React from "react";

const ShimmerProfile = () => {
  return (
    <div className="w-12/12 bg-zinc-900">
      <div className="h-full px-6 pt-24  md:px-20  md:py-28 w-12/12">
        <div className="md:h-[70vh] h-screen  md:gap-8 rounded-xl px-6 py-6 bg-zinc-700 flex flex-col md:flex-row justify-start items-center">
          <div className="w-3/12 flex flex-col justify-center items-center gap-3">
            <div className="stroke animate rounded-full w-60 h-60"></div>
            <div className="stroke animate rounded-xl w-32 h-8 lg:h-12"></div>
          </div>
          <div className="w-full lg:w-7/12 pt-10 h-full gap-4 flex flex-col justify-start items-start">
            <div className="w-11/12 rounded-3xl h-5 md:h-8 stroke animate"></div>
            <div className="w-10/12 rounded-3xl h-5 md:h-8 stroke animate"></div>

            <div className="w-11/12 rounded-3xl h-5 md:h-8stroke animate"></div>
            <div className="w-9/12 rounded-3xl h-5 md:h-8 stroke animate"></div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-start pt-4 gap-4 items-start">
              <div className="w-52 rounded-full h-10 lg:h-16 stroke animate"></div>
              <div className="w-52 rounded-full h-10 lg:h-16 stroke animate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProfile;
