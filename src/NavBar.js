import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">My Music</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Main
            </Link>
            <Link className="nav-item nav-link" to="/new">
              New
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
