import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-slate-200 py-6 shadow-md">
      <Container className="flex justify-between">
        <div className="">
          <Link to="/" className="text-3xl flex items-center">
            <div className="w-6 mr-2">
              <img src="/icon-buana.png" alt="" />
            </div>
            <div>
              <span className="font-light">BvK</span>
              <span className="font-extrabold">IMDB</span>
            </div>
          </Link>
        </div>
        <div className="">
          <Link
            to="/watched"
            className={`btn rounded-lg btn-neutral ${
              location.pathname === "/watched" ? "btn-disabled" : ""
            }`}
          >
            Watched Movies
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
