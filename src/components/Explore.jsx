const Explore = () => {
  const btnCSS =
    "w-full cursor-pointer py-4 md:py-6 lg:py-8 md:text-lg lg:text-xl text-base font-semibold rounded-3xl shadow-md bg-white";

  return (
    <div className="relative pt-20 md:gap-8 gap-4 px-2 md:px-16  flex flex-row justify-start items-start w-12/12">
      <div className=" w-5/12 h-screen">
        hi
      </div>
      <div className=" relative flex justify-center items-center w-7/12 h-screen">
        <img className="opacity-80 w-[50%] z-10" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand.png"></img>
        <img className="opacity-80 absolute w-[80%] -z-10 hand" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"></img>
      </div>
    </div>
  );
};
export default Explore;
