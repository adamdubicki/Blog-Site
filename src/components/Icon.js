import React from 'react';

export default ({ icon, onClick }) => 
  <i
    className={`icon ${icon}`}
    onClick={() => onClick()}  
  />