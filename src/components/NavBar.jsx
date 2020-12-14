/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useRef, useState } from 'react';

const NavBar = ({ onItemHover }) => {
  const onItemHoverCall = event => {
    onItemHover(event.target);
  };
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#">Companies</a>
        </li>
        <li
          data-id="about"
          className="about"
          onMouseEnter={e => onItemHoverCall(e)}
        >
          <a href="#" data-id="about">
            About us<i className="fas fa-chevron-down"></i>
          </a>
        </li>

        <li
          data-id="foundation"
          className="foundation"
          onMouseEnter={e => onItemHoverCall(e)}
        >
          <a href="#" data-id="foundation">
            Our foundation
            <i className="fas fa-chevron-down"></i>
          </a>
        </li>
        <li
          data-id="branson"
          className="branson"
          onMouseEnter={e => onItemHoverCall(e)}
        >
          <a href="#" data-id="branson">
            branson family
            <i className="fas fa-chevron-down"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
