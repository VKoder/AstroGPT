import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Chat from "./Chat";
import Call from "./Call";
import AstroProfile from "./AstroProfile";
import Header from "./Header";
import LoginPage from "./Authentication/LoginPage";

const Body = () => {
  const appLayout = createBrowserRouter([
  
    {
      path: "/",
      element: (
        <>
        <Header/>
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
            path:"/login",
            element:<LoginPage/>
          },
      ])
       
        
        
    },
  
   
  ]);

  return (
    <>
      <RouterProvider router={appLayout} />
    </>
  );
};
export default Body;
