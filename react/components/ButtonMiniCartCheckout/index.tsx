import React from 'react';
import {Button} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['btnCheckout', 'btnBack'];

const ButtonMiniCartCheckout = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const closeButton = document.querySelector<HTMLElement>('.vtex-minicart-2-x-closeIconButton');

  const handleCheckout = () => {
    //window.location.replace('/checkout/#/cart');
    window.location.assign('/checkout/#/cart');
  };
  const handleBack = () => {
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <>
      <div className=" mv3 ph4 ph6-l">
        <div className={handles.btnCheckout}>
          <Button variation="primary" block onClick={() => handleCheckout()}>
            IR A PAGAR
          </Button>
        </div>
      </div>
      <div className="mv4 ph4 ph6-l">
        <div className={handles.btnBack}>
          <Button variation="primary" block onClick={() => handleBack()}>
            SEGUIR COMPRANDO
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonMiniCartCheckout;
