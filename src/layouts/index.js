import React from "react";
import styles from './index.scss';
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";


export default ({data}) => (

  <div id="app">
    <Helmet>
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
    </Helmet>
    <Navbar title={data.site.siteMetadata.title}/>
    <section className="main-content columns is-fullheight">
      <Menu title={data.site.siteMetadata.title}/ >
        <div className="container__main column is-10 is-offset-2">
            <div className="section">

              <div className="card">
                <div className="card-header"><p className="card-header-title">Header</p></div>
                <div className="card-content"><div className="content">Content</div></div>
              </div>
              
                <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>

                <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>

                <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>

                          <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>

                <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>

                <div className="card">
                  <div className="card-header"><p className="card-header-title">Header</p></div>
                  <div className="card-content"><div className="content">Content</div></div>
                </div>


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

export const query = graphql `
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;