import React, {useState} from 'react';
import {Box, Collapsible, Spinner} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

const PaymentMethods = () => {
  const [isOpenQuestion, setOpenQuestion] = useState<number | null>(null);

  const handles = useCssHandles(CSS_HANDLES);

  function toggleAccordion(questionNbr: number) {
    return (_e: any) => setOpenQuestion(isOpenQuestion !== questionNbr ? questionNbr : null);
  }

  return (
    <div>
      <div className="">
        <div className="w-100">
          <Box>
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">MEDIOS DE PAGOS</div>}
              onClick={toggleAccordion(1)}
              isOpen={isOpenQuestion === 1}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Los productos del Portal, salvo que se señale una forma diferente para casos particulares, sólo pueden ser pagados con
                tarjetas de crédito y débito emitidas en Chile. Tanto el uso de tarjetas en el Portal como las autorizaciones de las
                transacciones realizadas con ellas, se regirán por lo establecido en el contrato del Usuario con el respectivo emisor de las
                mismas. La transacción quedará sujeta a la verificación por parte de la empresa emisora de la tarjeta bancaria elegida por
                el Usuario. No se considerará como completa una transacción mientras Nutrisco no reciba la autorización de la institución
                financiera respectiva. En caso que Nutrisco no reciba dicha confirmación, se anulará la compra. Para aquellos usuarios que
                mantengan un vínculo laboral vigente con Nutrisco, adicionalmente podrán elegir como medio de pago el cargo a su liquidación
                de sueldo. Para tales efectos se considerará la suma de todas las compras, restadas a las devoluciones efectuadas por el
                Usuario durante el mes calendario. Nutrisco informará a su área de remuneraciones de las compras realizadas por sus
                trabajadores, para calcular el respectivo descuento en la liquidación de sueldo del mes siguiente. El Usuario acepta de
                forma explícita el descuento en su remuneración al comprar en el Portal eligiendo este medio de pago. En caso que el Usuario
                deje de prestar servicios a Nutrisco, se descontará de su finiquito aquellos montos que correspondan a compras, y aún no
                hayan sido descontados.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
