import React from 'react';
import { Helmet } from "react-helmet";

import "../styles/index.scss"

import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon32x32 from '../assets/favicon-32x32.png'
import favicon16x16 from '../assets/favicon-16x16.png'

export default ({ children }) => (
  <div id="app">
    <Helmet>
      <html lang="en"/>
      <title>Adam Dubicki | Software Developer Victoria BC</title>
      <meta name="description" content="fllooopsdoaspdoas"/>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32}/>
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16}/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    {children()}
  </div>
);