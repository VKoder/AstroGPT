import React, { useEffect } from "react";

const Fetch = () => {

  

  const fetchData = async () => {
    const data = await fetch('https://corsproxy.org/?https%3A%2F%2Fapi.astromall.astrotalk.com%2FAstroMall%2Fastromall%2Fget%2Fproduct-type%3Fuser%3D0%26timeZone%3DAsia%2FKolkata')
    const json =await data.json()
    console.log(json)
  };
  useEffect(()=>{
    fetchData()
  },[])
 
  return (
    <></>
  )
};

export default Fetch;
