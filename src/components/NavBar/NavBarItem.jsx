/* eslint-disable jsx-a11y/anchor-is-valid */

import DropDownItem from '../DropDown/DropDownItem';
import React from 'react';

const options = [
  {
    className: 'about',
    listItemName: 'About Us',
    dropDownId: 'about',
    listItems: [
      'Our story',
      'timeline',
      'Working at Virgin',
      'Latest',
      'Virgin Group',
    ],
  },
  {
    className: 'foundation',
    listItemName: 'Our Foundation',
    dropDownId: 'foundation',
    listItems: ['Latest', 'Virgin unite Website'],
  },
  {
    className: 'branson',
    listItemName: 'Branson Family',
    dropDownId: 'branson',
    listItems: [" Richard's Blog", "Holly's Blog", 'Books'],
  },
];
const NavBarItem = () => {
  const returnedNavItems = options.map(option => {
    return (
      <li className={`${option.className} nav-item`}>
        <a href="#" className="nav-item-anchor">
          {option.listItemName}
          <i className="fas fa-chevron-down"></i>
        </a>
        <DropDownItem
          id={option.dropDownId}
          listItems={option.listItems}
          dropDownId={option.dropDownId}
        />
      </li>
    );
  });
  return [returnedNavItems];
};

export default NavBarItem;
