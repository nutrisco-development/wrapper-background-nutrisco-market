import React from 'react';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['WrapperContainer', 'FullScreenImage'];

function WrapperBackground() {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.WrapperContainer}>
      <picture>
        <source srcSet="https://orizoncl.vtexassets.com/arquivos/site-desktop-build-v2.jpg" media="(min-width: 1240px)" />
        <img
          src="https://orizoncl.vtexassets.com/arquivos/site-mobile-build-v2.jpg"
          alt="Nutrisco Market"
          className={handles.FullScreenImage}
        />
      </picture>
    </div>
  );
}

export default WrapperBackground;
