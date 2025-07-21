import React, {useState, useEffect} from 'react';
import {useProduct} from 'vtex.product-context';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['HideItem'];

const ProductIdentifierListProducts = () => {
  const productContextValue = useProduct();
  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? (
    <span style={{color: '#fff', fontSize: '14px', padding: '0', margin: '0', opacity: '0'}}>loading</span>
  ) : (
    <div className={`vtex-product-summary-identifier ${handles.HideItem}`} style={{color: '#fff', display: 'none', opacity: '0'}}>
      <div className="vtex-product-summary-sku-id" style={{color: '#fff', display: 'none', opacity: '0'}}>
        {productContextValue?.product?.items[0].itemId}
      </div>
      <div className="vtex-product-summary-product-id" style={{color: '#fff', display: 'none', opacity: '0'}}>
        {productContextValue?.product?.productId}
      </div>
    </div>
  );
};
export default ProductIdentifierListProducts;
