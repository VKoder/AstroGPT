const Explore = () => {

    const btnCSS = "w-full cursor-pointer py-4 md:py-6 lg:py-8 md:text-lg lg:text-xl text-base font-semibold rounded-3xl shadow-md bg-white"

  return (
    <div className="bg-[#E6E6FA] md:pt-6 md:gap-8 pt-4 gap-4 h-screen px-2 md:px-16 flex flex-col justify-start items-start w-12/12">
      <div>
        <span className="text-lg md:text-2xl lg:text-3xl font-bold">Explore</span>
      </div>
        <div className="w-full flex justify-center gap-4 md:gap-8">

       <span className={btnCSS}>Call with Astrologer</span>
          <span className={btnCSS}>Chat with Astrologer</span>
          </div>
          <div className="w-full flex justify-center gap-4 md:gap-8">
        <span className={btnCSS}>Call with Astrologer</span>
          <span className={btnCSS}>Chat with Astrologer</span>
          </div>
    </div>
  );
};
export default Explore;
