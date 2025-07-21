import React, {useState, useEffect} from 'react';
import {useProduct} from 'vtex.product-context';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['BoxNotifyPdp', 'BoxNotifyPdpItem'];

const UnitProductMessage = () => {
  const productContextValue = useProduct();

  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(true);
  //"notify-pdp",
  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? (
    <span style={{color: '#fff', fontSize: '14px', padding: '0', margin: '0', opacity: '0'}}>loading</span>
  ) : (
    <div>
      {Number(productContextValue?.product?.items[0].itemId) === 1181 ? (
        <div className={handles.BoxNotifyPdp}>
          <div className={handles.BoxNotifyPdpItem}>producto unitario</div>{' '}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UnitProductMessage;
