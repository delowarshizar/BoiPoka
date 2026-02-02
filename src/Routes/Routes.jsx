import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBook from "../pages/ListedBook/ListedBook";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/listedBooks",
        Component: ListedBook,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
