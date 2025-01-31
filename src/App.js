import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaaurantMenu";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom"; // Try this if it works
  

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/", // Home route
        element: <AppLayout />, // Render the AppLayout component
        errorElement: <Error />,// //  // Render the Error component
        children:
            [
                {
                    path: "/", // Body route
                    element: <Body /> // Render the Body component
                },
                {
                    path: "/about", // About route
                    element: <About /> // Render the About component
                },
                {
                    path: "*", // Error route
                    element: <Error /> // Render the Error component
                },
                {  
                    path: "/contact", // Contact route  
                    element: <Contact /> // Render the Contact component      
                },
                {
                    path: "/restaurants/:resId", // :resId is a URL parameter
                    element: <RestaurantMenu /> // Render the RestaurantMenu component
                }
            ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter} />
);