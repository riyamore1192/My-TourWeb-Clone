
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componants/Layout";
import Home from "./Pages/Home";
import Logout from "./Pages/Logout";
import ErrorBoundary from "./componants/ErrorBoundary";

// Lazy-loaded pages
const About = React.lazy(() => import("./Pages/About"));
const Blogdetail = React.lazy(() => import("./Pages/Blogdetail"));
const LoginComponent = React.lazy(() => import("./Pages/Logincompo"));
const Blog = React.lazy(() => import("./Pages/Blog"));
const RoutePlace = React.lazy(() => import("./Pages/Routeplace"));
const Authcompo = React.lazy(() => import("./Pages/Authcompo"));

// Optional Loader component for Suspense fallback
const Loader = () => (
  <div className="flex justify-center items-center h-screen text-2xl font-bold">
    Loading page...
  </div>
);

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/blog",
        element: (
          <ErrorBoundary>
            <Blog />
          </ErrorBoundary>
        ),
      },
      {
        path: "/blog/:id",
        element: (
          <ErrorBoundary>
            <Blogdetail />
          </ErrorBoundary>
        ),
      },
      { path: "/places", element: <RoutePlace /> },
    ],
  },
  { path: "/login", element: <LoginComponent /> },
  { path: "/booking", element: <Authcompo /> },
  { path: "/logout", element: <Logout /> },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
