import React from "react";
import NavbarItem from "./NavbarItem";

export default () => (
  <div>
    <nav className="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className = "navbar-item" href = "https://bulma.io" >
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <NavbarItem name="foo"/>
      </div>
    </nav>
  </div>
);