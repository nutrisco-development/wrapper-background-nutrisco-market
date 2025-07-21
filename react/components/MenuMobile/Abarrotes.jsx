import React from 'react';
import {abarrotes} from '../../data/menu/abarrotes';

export const Abarrotes = (props) => {
  const {handles} = props;
  return (
    <li className={handles.menuMobileListItemsMainNew}>
      <details className={handles.menuMobileListTitleMainNew}>
        <summary className={handles.menuMobileListTitleSummaryMainNew}>
          <span>abarrotes</span>
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
                <span>aceite y aderezos</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.aceitesAlinos).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* separador */}
          {/* <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>arroz y legumbres</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.arrozLegumbres).map(([key, value]) => (
                  <li className={handles.menuMobileListSubMenuItemsNew}>
                    <a href={`${value.url}`}>{value.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li> */}
          {/* separador */}
          <li className={handles.menuMobileItemSubMenuNew}>
            <details className={handles.menuMobileTitleSubMenuNew}>
              <summary className="">
                <span>café Italiano</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.cafeItaliano).map(([key, value]) => (
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
                <span>harina y premezclas</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.harinasPremezclas).map(([key, value]) => (
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
                <span>salsas</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.pastasSalsas).map(([key, value]) => (
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
                <span>Té Premium</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.tePremium).map(([key, value]) => (
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
                <span>snack y coctel</span>
              </summary>
              <ul className={handles.menuMobileListSubMenuNew}>
                {Object.entries(abarrotes.snackCoctel).map(([key, value]) => (
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
