import React from 'react';
import { Helmet } from "react-helmet";

import "../styles/main.scss"

import Navbar from '../components/Navbar';

export default ({ children }) => (
  <div id="app">
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
    </Helmet>
    <Navbar />
    {children()}
  </div>
);