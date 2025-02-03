import React from "react";
import { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaaurantMenu";
import {
    createHashRouter,  // Changed from createBrowserRouter
    Outlet,
    RouterProvider,
} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

const lazyAbout = lazy(() => import("./components/About"));

const appRouter = createHashRouter([  // Changed from createBrowserRouter
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<div>Loading...</div>}>
                    <About />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);