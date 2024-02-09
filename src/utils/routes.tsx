import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Watched from "../pages/Watched";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "/watched", element: <Watched /> },
]);

export default router;
