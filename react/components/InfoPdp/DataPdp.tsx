import React, {useState, useEffect} from 'react';
import {useProduct} from 'vtex.product-context';

const InfoPdp = () => {
  const {product} = useProduct();
  //DataPdp
  const specificationGroups = product?.properties;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? (
    <span style={{color: '#fff', fontSize: '14px', padding: '0', margin: '0', opacity: '0'}}>loading</span>
  ) : (
    <div className="users">{JSON.stringify(specificationGroups)}</div>
  );
};

export default InfoPdp;
