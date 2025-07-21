import React, {useCallback} from 'react';
import {NumericStepper} from 'vtex.styleguide';
import useProduct from 'vtex.product-context/useProduct';
import {useProductDispatch} from 'vtex.product-context/ProductDispatchContext';

const CustomProductQuantity: React.FC = () => {
  const {selectedQuantity, selectedItem} = useProduct();

  const dispatch = useProductDispatch();
  // const onChange = (e: {value: number}) => {
  //   dispatch({type: 'SET_QUANTITY', args: {quantity: e.value}});
  // };
  //const MAX_QUANTITY = 7;

  //
  //const handles = useCssHandles(CSS_HANDLES)
  const onChange = useCallback(
    (e: {value: number}) => {
      dispatch({type: 'SET_QUANTITY', args: {quantity: e.value}});
    },
    [dispatch]
  );

  // const availableQuantity =
  //   selectedItem?.sellers?.find(({sellerDefault}) => sellerDefault === true)?.commertialOffer?.AvailableQuantity ?? 0;

  // if (availableQuantity < 1 || !selectedItem) {
  //   return null;
  // }

  // const showAvailable = availableQuantity <= warningQuantityThreshold;
  // const unitMultiplier = quantitySelectorStep === 'singleUnit' ? 1 : selectedItem.unitMultiplier;
  //

  const productContext1 = useProduct();
  console.log(productContext1);

  return (
    <div className="flex flex-column mb4">
      <div>quantity selector - testing</div>
      <NumericStepper
        minValue={1}
        maxValue={7}
        unitMultiplier={selectedItem.unitMultiplier}
        value={selectedQuantity}
        suffix="kg"
        size="small"
        onChange={onChange}
      />
    </div>
  );
};

export default CustomProductQuantity;
// const onChange = useCallback(
//   (e: {value: number}) => {
//     dispatch({type: 'SET_QUANTITY', args: {quantity: e.value}});
//   },
//   [dispatch]
// );

{
  /* <div>
  <NumericStepper
    minValue={1}
    unitMultiplier={selectedItem.unitMultiplier}
    suffix="kg"
    onChange={onChange}
    value={selectedQuantity}
    maxValue={7}
  />
</div>
 */
}
