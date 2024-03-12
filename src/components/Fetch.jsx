// import React, { useEffect } from 'react';

// const Fetch = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const todayResponse = await fetch("https://aztro.sameerkumar.website?sign=leo&day=today", { method: "POST" });

//         const todayData = await todayResponse.json();

//         console.log("Today's Horoscope:", todayData);
       
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return null; // This component doesn't render anything, it's just for fetching data
// };

// export default Fetch;
