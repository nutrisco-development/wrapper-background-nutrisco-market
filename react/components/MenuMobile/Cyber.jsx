import React from 'react';

export const Cyber = (props) => {
  const {handles} = props;
  return (
    <a href="/pages/cyber" className={handles.menuMobileItemOffersLinkMainNew}>
      <li className={handles.menuMobileListItemsMainNew}>
        <span className={handles.menuMobileItemCyberMainNew}>🔥CYBER🔥</span>
      </li>
    </a>
  );
};
