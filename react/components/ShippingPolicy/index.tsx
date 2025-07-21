import React from 'react';
import {Box, Table} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import {priceSchema, priceShippingPolicy} from './priceShipping';
import {priceSchemaRegion, priceShippingPolicyRegion} from './priceShippingRegion';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

const ShippingPolicy = () => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div>
      <div className="">
        <div className="w-100">
          <Box>
            <div className="pv6 hover-c-on-action-secondary">
              <b>DESPACHOS</b>
            </div>
            <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
              Nutrisco despachará el pedido mediante terceras empresas de couriers a la dirección de destino ingresada por el Usuario, las
              cuales harán hasta dos intentos de entrega en el caso de no encontrar en el domicilio a una persona mayor de edad con
              capacidad de recibir los bultos, y un solo intento en el caso de error o ambigüedad en la dirección. Después de agotados los
              intentos, el courier retornará el pedido a la bodega del Portal y se tramitará la anulación y respectiva nota de crédito del
              pedido.
            </div>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Table fullWidth schema={priceSchema} items={priceShippingPolicy} density="high" />
            <br />
            <br />
            <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
              La Mesa de Todos envía pedidos de productos de ambiente seco a las regiones de Chile vía BluExpress. A continuación se detalla
              las regiones y comunas respectivas:
            </div>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Table fullWidth schema={priceSchemaRegion} items={priceShippingPolicyRegion} density="high" />
            <div>
              <p>
                <b>
                  Es necesario que el cliente indique claramente los datos necesarios para la realización del envío; estos son: Nombre
                  completo, RUT y teléfono de quién recibe el pedido, dirección completa. Todo estos antecedentes se les solicitará dentro
                  del proceso de compra en el portal.
                </b>
              </p>
              <div>
                <b>Valor del Transporte:</b>
              </div>
              <p>
                El costo del envío es de cargo del comprador (cliente) y este varía de acuerdo al peso/volumen del pedido y destino. Los
                valores se encontrarán una vez elegida la comuna y los productos dentro del portal.
              </p>
              <div>
                <b>Despachos:</b>
              </div>
              <p>
                Una vez que realices tu pedido, nuestro equipo tomará el pedido al día hábil siguiente. Cabe indicar que el servicio de
                BluExpress hará retiro todos los Jueves para realizar la distribución y despacho de los pedidos.
              </p>
              <p>
                Los envíos a Regiones tardan entre 4-10 días hábiles en llegar al domicilio. Estos días se pueden extender ya que dependen
                de las zonas a despachar.
              </p>
              <p>
                Para eventos y épocas especiales, tales como Cyberday, Navidad, Día del Padre, Día de la Madre, entre otros, el plazo se
                puede extender hasta un plazo de entrega de 10 días hábiles.
              </p>
              <p>Días hábiles: de Lunes a Viernes. Sábado, Domingo y festivos, son considerados como días no hábiles.</p>
              <div>
                <b>Estado de la entrega de los productos:</b>
              </div>
              <p>
                Todos los productos se envían probados y empaquetados procurando su protección con transporte y cuidado normal por parte de
                BluExpress. Cualquier daño por golpe o humedad el cliente deberá ponerse en contacto al siguiente mail&nbsp;
                <a href="mailto: contacto@lamesadetodos.cl">contacto@lamesadetodos.cl</a>
              </p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
