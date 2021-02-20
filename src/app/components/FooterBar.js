import React from "react";
import { Link } from "react-router-dom";
import "../Styles/FooterBar.css";

const FooterBar = () => {
  return (
    <footer>
      <div class="footerBar">
        <div class="row">
          <Link to="/">
            <i class="fa fa-facebook text-primary"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-instagram"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-youtube"></i>
          </Link>
          <Link to="/">
            <i class="fa fa-twitter"></i>
          </Link>
        </div>

        <div class="row">
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
              <Link to="/">Terms & Conditions </Link>
            </li>
            <li>
              <Link to="/">Career </Link>
            </li>
          </ul>
        </div>

        <div class="row">
          STARTOFF Copyright © 2021 StartOff - All rights reserved || Designed
          By: Naman
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
