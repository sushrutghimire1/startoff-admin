import React from "react";
import { NavLink } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light px-1 py-2">
        <div>
          <NavLink className="navbar-brand" to="/">
            <span className="display-4">Start Off</span>
          </NavLink>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Link
              </NavLink>
            </li>
          </ul>
          <NavbarDropdown />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
