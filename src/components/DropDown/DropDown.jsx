/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useRef } from 'react';

import DropDownItem from './DropDownItem';

const DropDown = ({ getRef }) => {
  const options = [
    {
      dropDownId: 'about',
      listItems: [
        'Our story',
        'timeline',
        'Working at Virgin',
        'Latest',
        'Virgin Group',
      ],
      ref: useRef(null),
    },
    {
      dropDownId: 'foundation',
      listItems: ['Latest', 'Virgin unite Website'],
      ref: useRef(null),
    },
    {
      dropDownId: 'branson',
      listItems: [
        " Richard's Blog",
        "Holly's Blog",
        'Books',
      ],
      ref: useRef(null),
    },
  ];
  const returnedDropDownItems = options.map(option => {
    getRef(option.ref);

    return (
      <DropDownItem
        id={option.dropDownId}
        listItems={option.listItems}
        dropDownId={option.dropDownId}
        itemRef={option.ref}
      />
    );
  });
  return (
    <div className="on-hover-lists">
      {returnedDropDownItems}
    </div>
  );
};

export default DropDown;
