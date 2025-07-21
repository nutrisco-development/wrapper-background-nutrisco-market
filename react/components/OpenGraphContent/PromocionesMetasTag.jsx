import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const PromocionesMetasTag = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/pages/ofertas' && (
        <MetaTags
          title="Ofertas Hoy en Chile | Despacho en 24 hrs RM | La Mesa de Todos"
          description="Las mejores promociones para tu casa: congelados, abarrotes, salsas. Pedidos sobre $30.000 envío gratis. Aceptamos todo medio de pago. ¡Pide ahora!"
        />
      )}
      {isRoutePage === '/pages/cyber' && (
        <MetaTags
          title="Ofertas sobre La Mesa | Cyber Oficial | Hasta un 60% de Dcto"
          description="Helados Haagen Dazs, Barritas de Cereal Nature Valley, Pre-Mezclas Betty Crocker y tus Flip Snacks con precios rebajados. ¡Aprovecha el Cyber!"
        />
      )}
      {isRoutePage === '/pages/fiestas-patrias' && (
        <MetaTags
          title="Asado para Fiestas Patrias | Especial Carnes 25% Dcto |  La Mesa de Todos"
          description="Despacho a domicilio en 24 horas. Pedidos sobre $30.000 envío gratis. La mejor carne para hacer asado. Aceptamos todo medio de pago. ¡Pide ahora!"
        />
      )}
    </>
  );
};

export default PromocionesMetasTag;
