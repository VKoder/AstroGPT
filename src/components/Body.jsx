import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Chat from "./Chat";
import Call from "./Call";
import AstroProfile from "./AstroProfile";


const Body = () => {

    const appLayout = createBrowserRouter([
        {
            path: "/",
            element: <Hero/>,
        },
        {
            path:"/chat",
            element: <Chat/>,
        },
        {
            path:"/call",
            element: <Call/>,
        },
        {
            path:"/astroProfile/:id",
            element: <AstroProfile/>,
        },
    ])

    return (
        <>
        <RouterProvider router={appLayout}/>
        </>
    )

    
}
export default Body;