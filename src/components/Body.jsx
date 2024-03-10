import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Chat from "./Chat";
import Call from "./Call";
import AstroProfile from "./AstroProfile";
import Header from "./Header";
import Following from "./Following";
import Chatbot from "./Chatbot";
import AstroKundli from "./AstroKundli";
import LoginForm from "./LoginForm";
import Horoscope from "./Horoscope";
import FootIcons from "./FootIcons";

const Body = () => {
  const appLayout = createBrowserRouter([
  
    {
      path: "/",
      element: (
        <>
        <Header/>
        <FootIcons/>
          <Outlet />
        </>
      ),
      children:([
        { 
            path: "/",
            element: <Hero />,
          },
          {
            path: "/chat",
            element: <Chat />,
          },
          {
            path: "/call",
            element: <Call />,
          },
          {
            path: "/astroProfile/:id",
            element: <AstroProfile />,
          },
          {
            path:"/following",
            element:<Following/>
          },
          {
            path:"/chatbot",
            element:<Chatbot/>
          },
          {
            path:"/kundligpt",
            element:<AstroKundli/>
          },
          {
            path:"/horoscope/:id",
            element:<Horoscope/>
          },
      ])
       
        
        
    },
    {
      path:"/login",
      element:<LoginForm/>
    },
   
   
  ]);

  return (
    <>
      <RouterProvider router={appLayout} />
    </>
  );
};
export default Body;
