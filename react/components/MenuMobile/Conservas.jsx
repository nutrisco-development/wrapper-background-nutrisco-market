import React from 'react';
import {conservas} from '../../data/menu/conservas';

export const Conservas = (props) => {
  const {handles} = props;
  return (
    <li className={handles.menuMobileListItemsMainNew}>
      <details className={handles.menuMobileListTitleMainNew}>
        <summary className={handles.menuMobileListTitleSummaryMainNew}>
          <span>conservas</span>
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
                <span>pescados</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(conservas.pescados).map(([key, value]) => (
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
                {Object.entries(conservas.mariscos).map(([key, value]) => (
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
                {Object.entries(conservas.frutasVerduras).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
  );
};
