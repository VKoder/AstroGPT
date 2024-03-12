import React from 'react'

const AstroProfileBottom = ({data}) => {
  return (
    <div className="rounded-2xl text-purple-300 shadow-zinc-700  transition-all hover:bg-opacity-55  bg-purple-950 bg-opacity-55 flex flex-col lg:px-10 px-4 py-4 lg:py-10  w-full mt-4 my-20">
    <div className="w-full flex lg:gap-4 gap-1 flex-col">
      <span className="lg:text-3xl text-2xl uppercase  font-bold">
        About me
        {data?.shortBio && (
          <span className="lg:text-xl text-base text-purple-400 font-normal pl-2 italic ">
            ({data?.shortBio})
          </span>
        )}
      </span>
      <span
        style={{ wordSpacing: "2px" }}
        className="lg:text-lg text-sm tracking-wide font-normal text-gray-300"
      >
        {data?.longBio}
      </span>
    </div>
    <div className="lg:py-4 py-2">
      <span className="lg:text-xl text-lg  font-bold">
        Problem Area:{" "}
      </span>
      <span className="lg:text-base text-sm lg:tracking-wide tracking-wider  lg:px-2 px-1 py-0.5 lg:py-2 rounded-3xl italic">
        {data?.problemArea}
      </span>
    </div>
    <div className="w-full pt-4 gap-4 flex flex-wrap justify-center items-center flex-row">
      {data?.album.map((img) => (
        <div
          key={img?.url}
          className="rounded-2xl bg-center  shadow-purple-600 shadow-sm lg:shadow-md lg:w-[300px] w-full h-[200px] lg:h-[280px]  overflow-hidden"
        >
          <img className="w-full" src={img?.url} alt="img"></img>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AstroProfileBottom
