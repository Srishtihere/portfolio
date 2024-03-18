import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Community from "../Pages/Community";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import PageNotFound from "../Pages/PageNotFound";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Community",
        element: <Community />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

export default router;
