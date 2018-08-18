import React from "react";
import styles from './index.scss';

export default ({ children }) => (
  <div>
    <div className="buttons">
      <span className="button is-success">Save changes</span>
      <span className="button is-info">Save changes</span>
      <span className="button is-danger">Save changes</span>
    </div>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: '0 1rem' }}>
      { children() }
    </div>
  </div>
);