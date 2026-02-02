import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
