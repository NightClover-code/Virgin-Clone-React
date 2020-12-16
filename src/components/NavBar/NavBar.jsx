/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useRef, useState } from 'react';

import NavBarItem from './NavBarItem';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-item">
          <a href="#" className="nav-item-anchor">
            Companies
          </a>
        </li>
        <NavBarItem />
      </ul>
    </nav>
  );
};

export default NavBar;
