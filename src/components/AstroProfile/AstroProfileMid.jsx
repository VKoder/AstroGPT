const AstroProfileMid = ({ data }) => {
  return (
    <div className="w-12/12 h-screen bg-[#F5F5FF] rounded-2xl px-10 py-10">
      <span>About {data?.name}</span>
      <div className="w-12/12 justify-between flex-row bg-black h-full flex items-center">
        <div className="w-8/12 overflow-hidden flex flex-row gap-4 h-full">
          {data?.album.map((img) => (
            <div className="w-[200px] h-[200px]  rounded-3xl  bg-orange-400">
              <img className="w-full rounded-3xl " src={img?.url} alt="pic"></img>
            </div>
          ))}
        </div>
        <div className="w-3/12 bg-red-300 h-full"></div>
      </div>
    </div>
  );
};
export default AstroProfileMid;
