import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const NutraceuticosMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/nutraceuticos' && (
        <MetaTags
          title="Alimentos Nutracéuticos en Chile | La Mesa de Todos"
          description="Revisa aquí los Alimentos Nutracéuticos disponibles en Chile que tenemos para ti. A través de una sencilla compra online, tendrás tus productos ¡Conócelos!"
        />
      )}
      {isRoutePage === '/nutraceuticos/capsulas' && (
        <MetaTags
          title="Venta de Cápsulas Omega en Chile | La Mesa de Todos"
          description="Venta de Cápsulas Omega para contribuir a disminuir el riesgo de enfermedades cardiovasculares en Chile. En distintos formatos ¡Haz tu pedido online aquí!"
        />
      )}
      {isRoutePage === '/nutraceuticos/capsulas/omega-tres' && (
        <MetaTags
          title="Omega 3 en Chile a ¡Bajo Precio! | La Mesa de Todos"
          description="Encuentra aquí tu Omega 3 disponible en Chile a ¡Bajo Precio! Apoya el cuidado del corazón y el cerebro con una concentración balanceada ¡Haz tu pedido!"
        />
      )}
    </>
  );
};

export default NutraceuticosMetasTags;
