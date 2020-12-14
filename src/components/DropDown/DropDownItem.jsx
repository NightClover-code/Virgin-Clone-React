/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

const DropDownItem = ({ listItems, id, itemRef }) => {
  const returnedListItems = listItems.map(listItem => {
    return (
      <li key={listItem.toLowerCase()}>
        <a href="#">{listItem}</a>
      </li>
    );
  });
  const onDropDownLeave = () => {
    itemRef.current.classList.remove('active');
  };
  return (
    <ul
      id={id}
      ref={itemRef}
      onMouseLeave={onDropDownLeave}
    >
      {returnedListItems}
    </ul>
  );
};

export default DropDownItem;
