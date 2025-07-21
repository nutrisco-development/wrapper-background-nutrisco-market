import React from 'react';
import {congelados} from '../../data/menu/congelados';

export const Congelados = (props) => {
  const {handles} = props;
  return (
    <li className={handles.menuMobileListItemsMainNew}>
      <details className={handles.menuMobileListTitleMainNew}>
        <summary className={handles.menuMobileListTitleSummaryMainNew}>
          <span>congelados</span>
          <svg classname="" width={17} height={9} viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9349 1.30565e-06L16.4101 1.69053L8.20505 8.86929L-1.47791e-07 1.69053L1.47522 1.28968e-07L8.20505 5.85551L14.9349 1.30565e-06Z"
              fill="currentColor"
            />
          </svg>
        </summary>
        <ul className={handles.menuMobileListSubMenuNew}>
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>carnes</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.carnes).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>frutas y verduras</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.frutasVerduras).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>Helados</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.helados).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>mariscos</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.mariscos).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>pescados</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.pescados).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>platos preparados</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(congelados.platosPreparados).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
        </ul>
      </details>
    </li>
  );
};
