import ShimmerCard from "./ShimmerCard";

const ShimmerList = () => {
  return (
    <div className=" h-full w-12/12 px-20 py-10 flex justify-start items-start flex-col">
      <div className="flex flex-row w-full justify-between items-start">
        <span className="h-10 rounded-3xl stroke animate bg-gray-50 w-80"></span>
      </div>
      <div className="flex flex-row w-full gap-3 py-8 justify-start items-start">
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
        <span className="h-8 rounded-lg stroke animate bg-gray-50 w-28"></span>
      </div>
      <div className="w-full flex flex-wrap gap-8 flex-row justify-center items-start">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};
export default ShimmerList;
