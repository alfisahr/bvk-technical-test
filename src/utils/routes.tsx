import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie", element: <Movie /> },
]);

export default router;
