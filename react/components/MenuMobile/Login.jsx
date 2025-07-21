import React from 'react';

export const Login = (props) => {
  const {handles} = props;
  return (
    <li className={handles.menuMobileListItemsMainNew}>
      <details className={handles.menuMobileListTitleMainNew}>
        <summary className={handles.menuMobileListTitleSummaryMainNew}>
          <a href="/login?returnUrl=/" style={{textDecoration: 'none'}}>
            <span>Mi Cuenta</span>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
            {...props}
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0" />
            <path d="M9 10a3 3 0 106 0 3 3 0 10-6 0M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.834 2.855" />
          </svg>
        </summary>
      </details>
    </li>
  );
};
