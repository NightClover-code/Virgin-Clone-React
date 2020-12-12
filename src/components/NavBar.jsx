/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useRef, useState } from 'react';

const NavBar = ({ listRef }) => {
  const onItemHover = event => {
    if (
      listRef.getAttribute('id') ===
        event.target.getAttribute('data-id') ||
      listRef.getAttribute('id') ===
        event.target.firstChildElement.getAttribute(
          'data-id'
        )
    ) {
      listRef.style.display = 'block';
      listRef.style.transition = 'all 1s ease-in-out';
    }
  };
  const onItemQuit = event => {
    listRef.style.display = 'none';
  };
  return (
    <nav className="nav-bar">
      <ul
        onMouseEnter={e => onItemHover(e)}
        onMouseLeave={e => onItemQuit(e)}
      >
        <li>
          <a href="#">Companies</a>
        </li>
        <li data-id="about" className="about">
          <a href="#" data-id="about">
            About us<i className="fas fa-chevron-down"></i>
          </a>
        </li>

        <li data-id="foundation" className="foundation">
          <a href="#" data-id="foundation">
            Our foundation
            <i className="fas fa-chevron-down"></i>
          </a>
        </li>
        <li data-id="branson" className="branson">
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
