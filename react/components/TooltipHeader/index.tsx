import React from 'react';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = [
  'TooltipLocationBoxMain',
  'TooltipLocation',
  'TooltipLocationBox',
  'TooltipLocationClose',
  'TooltipLocationTitle',
  'TooltipLocationLink',
  'TooltipLocationBtn',
  'TooltipLocationBtnCurrent',
  'TooltipLocationBtnChange',
  'TooltipLocationActive',
];

const TooltipHeader = () => {
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <div className={handles.TooltipLocationBoxMain}>
      <div className={`${handles.TooltipLocation}`}>
        <div className={handles.TooltipLocationBox}>
          <div className={handles.TooltipLocationClose}>
            <img
              src="https://orizoncl.vteximg.com.br/arquivos/close-tooltips-location.svg?v=637758568836830000"
              alt="close"
              width={20}
              height={20}
            />
          </div>
          <span className={handles.TooltipLocationTitle}>
            Los productos disponibles para compra están asociados a la comuna de despacho seleccionada.
          </span>
          <div className={handles.TooltipLocationLink}>
            <a className={`${handles.TooltipLocationBtn} ${handles.TooltipLocationBtnCurrent}`}>Mantener</a>
            <a className={`${handles.TooltipLocationBtn} ${handles.TooltipLocationBtnChange}`}>Cambiar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipHeader;
