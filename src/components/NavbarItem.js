import React from "react";
import Link from "gatsby-link";

export default ( {name} ) => (
  <a className="navbar-item">
    <Link to="/about/">
      { name }
    </Link>
  </a>
);