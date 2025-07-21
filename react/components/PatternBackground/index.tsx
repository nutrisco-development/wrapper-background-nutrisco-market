import React, {useEffect} from 'react';
import {useRuntime} from 'vtex.render-runtime';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = [
  'patternBackgroundHome',
  'backgroundCarnesOx',
  'backgroundTemplate',
  'backgroundPets',
  'backgroundGentil',
  'backgroundCyber',
  'backgroundApache',
];

const PatternBackground = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  useEffect(() => {
    const elementBackgroudOx = document.querySelector(
      '.render-route-store-custom-page-brand-ox .render-provider .vtex-store__template.bg-base'
    );
    if (elementBackgroudOx) {
      elementBackgroudOx.classList.add(handles.backgroundCarnesOx);
    }

    const elementBackgroudPets = document.querySelector(
      '.render-route-store-custom-page-pets .render-provider .vtex-store__template.bg-base'
    );
    if (elementBackgroudPets) {
      elementBackgroudPets.classList.add(handles.backgroundPets);
    }

    const elementBackgroudGentil = document.querySelector(
      '.render-route-store-custom-page-brand-gentil2 .render-provider .vtex-store__template.bg-base'
    );
    if (elementBackgroudGentil) {
      elementBackgroudGentil.classList.add(handles.backgroundGentil);
    }

    const elementBackgroudApache = document.querySelector(
      '.render-route-store-custom-page-brand-apache .render-provider .vtex-store__template.bg-base'
    );
    if (elementBackgroudApache) {
      elementBackgroudApache.classList.add(handles.backgroundApache);
    }

    const elementBackgroudCyber = document.querySelector(
      '.render-route-store-custom-page-cyber .render-provider .vtex-store__template.bg-base'
    );
    if (elementBackgroudCyber) {
      elementBackgroudCyber.classList.add(handles.backgroundCyber);
    }
  });

  return <></>;
};

export default PatternBackground;
