import React from "react";
import { Link } from "react-router-dom";
import "../Styles/FooterBar.css";

const FooterBar = () => {
  return (
    <footer>
      <div className="footerBar">
        <div className="row">
          <ul>
            <li>
              <Link to="/">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <ul>
            <li>
              <Link to="/">Contact us </Link>
            </li>
            <li>
              <Link to="/">Our Services </Link>
            </li>
            <li>
              <Link to="/">Privacy Policy </Link>
            </li>
            <li>
              <Link to="/termCondition">Terms & Conditions </Link>
            </li>
            <li>
              <Link to="/career">Career </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          STARTOFF Copyright © 2021 StartOff - All rights reserved || Designed
          By: Naman
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
