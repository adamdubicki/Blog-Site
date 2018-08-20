import React from "react";
import styles from './index.scss';

export default ({ children }) => (
  <div id="app">
    <section className="main-content columns is-fullheight">
      <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p>Hello</p>
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="#" className="">
              <span className="icon"><i className="fa fa-home"></i></span> Home
            </a>
          </li>
          <li>
            <a href="#" className="is-danger">
              <span className="icon"><i className="fa fa-table"></i></span> Links
            </a>
          <ul>
        </ul></li>
      </ul>
    </aside>

    <div className="container column is-10">
      <div className="section">

        <div className="card">
          <div className="card-header"><p className="card-header-title">Header</p></div>
          <div className="card-content"><div className="content">Content</div></div>
        </div>
        <br />
        </div>
        </div>
    
  </section>
  </div>
);