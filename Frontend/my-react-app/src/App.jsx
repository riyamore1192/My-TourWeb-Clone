import React from "react"
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Layout from "./componants/Layout";
import Home from "./Pages/Home";
import { Suspense } from "react";
import About from "./Pages/About";
import Blogdetail from "./Pages/Blogdetail";
import RoutePlace from "./Pages/Routeplace";
import Blog from "./Pages/Blog";
import LoginComponent from "./Pages/Logincompo";
import Authcompo from "./Pages/Authcompo";
import Logout from "./Pages/Logout";

// const About = React.lazy(() => import("./Pages/About"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>
          <Home />
        </div>
      },

      {
        path: "/about",
        element: (
          // <Suspense fallback={<div>Loading about...</div>}>
            <About />
          // </Suspense>
        ),
      },
      {
        path: "/blog",
        element: <div>
          <Blog />
        </div>
      },
      {
        path: "/blog/:id",
        element: <div>
          <Blogdetail />
        </div>
      },
      {
        path: "/places",
        element: <div>
          <RoutePlace />
        </div>
      },
    ],
  },
  {
    path: "/login",
    element: <div>
      <LoginComponent />
      {/* <Authcompo /> */}
    </div>
  },
  {
    path: "/booking",
    element: <div>
      <Authcompo />
    </div>
  },
  {
    path: "/logout",
    element: <div>
      <Logout />
    </div>
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
