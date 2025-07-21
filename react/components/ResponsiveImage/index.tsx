import React from 'react';
import {Image} from 'vtex.store-image';
import {useRuntime} from 'vtex.render-runtime';
import {ImageProps} from 'vtex.store-image/react/ImageTypes';

export interface ResponsiveImageProps extends ImageProps {
  mobileSrc?: string;
}

const ResponsiveImage = ({mobileSrc, src, ...props}: ResponsiveImageProps) => {
  const {
    deviceInfo: {isMobile},
  } = useRuntime();
  return <Image src={isMobile && mobileSrc ? mobileSrc : src} {...props} />;
};

ResponsiveImage.schema = {
  title: 'Imagen responsive',
  type: 'object',
  properties: {
    mobileSrc: {
      title: 'Imagen para mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    src: {
      title: 'Imagen para desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    link: {
      title: 'Link para la imagen (Opcional)',
      type: 'object',
      properties: {
        url: {
          title: 'Url de redirección',
          type: 'string',
        },
        openNewTab: {
          title: 'Abrir nueva pestaña',
          type: 'boolean',
        },
      },
    },
  },
};

export default ResponsiveImage;
