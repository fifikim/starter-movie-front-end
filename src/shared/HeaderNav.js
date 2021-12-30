import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
  const style = {
    padding: "1rem 0 3rem",
  };

  return (
    <div className="container col-10">
      <ul className="nav justify-content-start" style={style}>
        <li className="nav-item d-none d-lg-block d-xl-block">
          <Link className="nav-link m-2 font-weight-bold text-light" to="/">
            <h1 className="h2"><strong>WeLoveMovies</strong></h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link m-3 font-weight-bold text-light"
            to="/movies"
          >
            All Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link m-3 font-weight-bold text-light"
            to="/theaters"
          >
            All Theaters
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
