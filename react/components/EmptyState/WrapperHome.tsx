import React from 'react';
import ReactPlayer from 'react-player';
import {useCssHandles} from 'vtex.css-handles';
import './wrapper-home.css';

const CSS_HANDLES = [
  'EmptyStateLaunchWrap',
  'EmptyStateLaunchWrapMask',
  'EmptyStateLaunchGrid',
  'EmptyStateLaunchLogo',
  'EmptyStateLaunchTitle',
  'EmptyStateLaunchLogoHeading',
  'EmptyStateLaunchTitleItem',
  'EmptyStateLaunchSubtitleItem',
  'EmptyStateLaunchImage',
  'EmptyStateLaunchVideo',
  'EmptyStateLaunchVideoItem',
  'EmptyStateLaunchLogoItem',
];

const WrapperHome = () => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.EmptyStateLaunchWrap}>
      <div className={handles.EmptyStateLaunchWrapMask}>
        <div className={handles.EmptyStateLaunchGrid}>
          <div className={handles.EmptyStateLaunchLogo}>
            <div className={handles.EmptyStateLaunchLogoItem}>
              <img alt="Logo" src="https://orizonb2ccl.vtexassets.com/arquivos/LOGO-LMTD-NEW-BRAND-HEADER.svg" height={60} />
            </div>
          </div>
          <div className={handles.EmptyStateLaunchTitle}>
            <div className={handles.EmptyStateLaunchLogoHeading}>
              <h1 className={handles.EmptyStateLaunchTitleItem}>Nos estamos preparando para sorprenderte</h1>
            </div>
          </div>
          <div className={handles.EmptyStateLaunchVideo}>
            <div className={handles.EmptyStateLaunchVideoItem}>
              <ReactPlayer url="https://vimeo.com/812400587" playing muted loop style={{borderRadius: 10, overflow: 'hidden'}} responsive />
            </div>
          </div>
          {/* <div className={handles.EmptyStateLaunchImage}></div> */}
        </div>
      </div>
    </div>
  );
};

export default WrapperHome;
