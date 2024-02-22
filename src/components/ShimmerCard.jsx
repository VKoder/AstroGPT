const ShimmerCard = () => {
    return (
      <div className=" flex flex-col justify-start items-start xl:gap-3 md:gap-2 gap-1 z-30">
        <div className="xl:w-[170px] lg:w-[150px] md:w-[130px] stroke animate rounded-md sm:w-[120px] w-[90px] xl:h-[200px] lg:h-[200px] sm:h-[160px] h-[120] md:h-[180px]"></div>
        <div className="xl:w-[120px] lg:w-[100px] md:w-[80px]  stroke animate rounded-md sm:w-[70px] xl:h-6 lg:h-6 md:h-4 sm:h-4 h-2"></div>
      </div>
    );
  };
  export default ShimmerCard;