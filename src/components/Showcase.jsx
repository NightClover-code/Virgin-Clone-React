/* eslint-disable jsx-a11y/anchor-is-valid */

import HoverLists from './HoverLists';
import React from 'react';

const Showcase = ({ getListRef }) => {
  return (
    <section className="showcase">
      <HoverLists getListRef={getListRef} />
      <div className="text-content">
        <span className="date mini-text">
          9 NOVEMBER 2020
        </span>
        <h2>
          First passengers travel safely on a Virgin
          Hyperloop
        </h2>
        <span className="more mini-text">
          <a href="#">
            find out more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>
        </span>
      </div>
      <div className="showcase-img">
        <img
          src="./assets/img/virgin-hyperloop_2020-11_josh-giegel-sara-luchian-first-passengers_homepage-editorial-hero.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Showcase;
