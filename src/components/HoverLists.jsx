/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useRef } from 'react';

const HoverLists = () => {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  //refs
  const aboutListRef = useRef(null);
  aboutListRef.current.style.left = `${
    screenWidth - aboutListRef.current.clientWidth * 3
  }`;
  return (
    <div className="on-hover-lists">
      <ul id="about" ref={aboutListRef}>
        <li>
          <a href="#">Our Story</a>
        </li>
        <li>
          <a href="#">Timeline</a>
        </li>
        <li>
          <a href="#">Working at Virgin</a>
        </li>
        <li>
          <a href="#">Latest</a>
        </li>
        <li>
          <a href="#">Virgin Group</a>
        </li>
      </ul>
      <ul id="foundation">
        <li>
          <a href="#">latest</a>
        </li>
        <li>
          <a href="#">Virgin Unite Website</a>
        </li>
      </ul>
      <ul id="branson">
        <li>
          <a href="#">Richar's Blog</a>
        </li>
        <li>
          <a href="#">Holly's Blog</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
      </ul>
    </div>
  );
};

export default HoverLists;
