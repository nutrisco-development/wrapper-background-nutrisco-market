import React from 'react';

export const Ofertas = (props) => {
  const {handles} = props;
  return (
    <a href="/pages/ofertas" className={handles.menuMobileItemOffersLinkMainNew}>
      <li className={handles.menuMobileListItemsMainNew}>
        <span className={handles.menuMobileItemOffersMainNew}>OFERTAS🔥</span>
      </li>
    </a>
  );
};
