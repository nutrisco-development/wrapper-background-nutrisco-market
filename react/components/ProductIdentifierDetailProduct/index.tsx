import React, {useState, useEffect} from 'react';
import {useProduct} from 'vtex.product-context';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = [
  'ProductIdentifierProductSheet',
  'ProductIdentifierSkuProductSheet',
  'ProductIdentifierSkuTitleProductSheet',
  'ProductIdentifierReferenceProductSheet',
  'ProductIdentifierReferenceTitleProductSheet',
  'ProductIdentifierProductIdProductSheet',
  'ProductIdentifierProductIdTitleProductSheet',
];

const ProductIdentifierDetailProduct = () => {
  const productContextValue = useProduct();

  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? (
    <span style={{color: '#fff', fontSize: '14px', padding: '0', margin: '0', opacity: '0'}}>loading</span>
  ) : (
    <div className={`vtex-product-summary-identifier ${handles.ProductIdentifierProductSheet}`}>
      <div className={`vtex-product-summary-sku-id ${handles.ProductIdentifierSkuProductSheet}`}>
        <span className={`${handles.ProductIdentifierSkuTitleProductSheet}`}>sku_id: </span>
        <span className="js-sku-product-sheet">{productContextValue?.product?.items[0].itemId}</span>
      </div>
      <div className={`vtex-product-summary-product-reference ${handles.ProductIdentifierReferenceProductSheet}`}>
        <span className={`${handles.ProductIdentifierReferenceTitleProductSheet}`}>| product_reference: </span>
        <span className="js-reference-product-sheet">{productContextValue?.product?.productReference}</span>
      </div>
      <div className={`vtex-product-summary-product-id ${handles.ProductIdentifierProductIdProductSheet}`}>
        <span className={`${handles.ProductIdentifierProductIdTitleProductSheet}`}>product_id: </span>
        <span className="js-id-product-sheet">{productContextValue?.product?.productId}</span>
      </div>
    </div>
  );
};

export default ProductIdentifierDetailProduct;
