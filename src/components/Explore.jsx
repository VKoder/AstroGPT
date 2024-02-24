const Explore = () => {

    const btnCSS = "w-full cursor-pointer py-4 md:py-6 lg:py-8 md:text-lg lg:text-xl text-base font-semibold rounded-3xl shadow-md bg-white"

  return (
    <div className="bg-black md:pt-6 md:gap-8 pt-4 gap-4 h-screen px-2 md:px-16 flex flex-col justify-start items-start w-12/12">
      <div className="relative h-[80vh] w-[40vw] bg-black flex justify-center items-center">
      <img className= "absolute z-20 w-80" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand.png"></img>
      <img className=" w-[50vw] top-0 hand" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"></img>
      </div> 
</div>
  );
};
export default Explore;
