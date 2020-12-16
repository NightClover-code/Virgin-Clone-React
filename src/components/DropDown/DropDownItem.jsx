/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

const DropDownItem = ({ listItems, id }) => {
  const returnedListItems = listItems.map(listItem => {
    return (
      <li key={listItem.toLowerCase()}>
        <a href="#">{listItem}</a>
      </li>
    );
  });
  return <ul id={id}>{returnedListItems}</ul>;
};

export default DropDownItem;
