import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const BebestiblesMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/bebestible' && (
        <MetaTags
          title="Bebestibles Saludables en Chile | La Mesa de Todos"
          description="Revisa aquí los Bebestibles Saludables con despacho a domicilio en Chile. Tenemos una gran variedad para que compres lo que estás buscando ¡Conócenos ahora!"
        />
      )}
      {isRoutePage === '/bebestible/agua' && (
        <MetaTags
          title="Venta de Agua Mineral ¡Disponible en Chile! | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta de Agua Mineral ¡Disponible en Chile! Tiene una rica composición en minerales, libre de tratamientos químicos ¡Pídela!"
        />
      )}
      {isRoutePage === '/bebestible/agua/agua-mineral' && (
        <MetaTags
          title="Agua Mineral a ¡Precio Conveniente! | La Mesa de Todos"
          description="Obtén aquí tu Agua Mineral a ¡Precio Conveniente! Refréscate en toda ocasión de forma natural y con un agradable gusto sin gas. ¡Haz tu pedido online hoy!"
        />
      )}
      {isRoutePage === '/bebestible/jugos' && (
        <MetaTags
          title="Venta de Jugos ¡Disponible en Chile a Precio Oferta! | La Mesa de Todos"
          description="Encuentra acá nuestra Venta de Jugos ¡Disponible en Chile a Precio Oferta! Tenemos una gran variedad para que te hidrates de la mejor manera ¡Compra online!"
        />
      )}
      {isRoutePage === '/bebestible/jugos/individuales' && (
        <MetaTags
          title="Jugos Individuales en Chile | La Mesa de Todos"
          description="Elige acá tus Jugos Individuales con despacho a domicilio en Chile hasta la puerta de tu casa. Ahora puedes llevarlos al trabajo o adónde quieras ¡Cómpralos!"
        />
      )}
      {isRoutePage === '/bebestible/smoothie' && (
        <MetaTags
          title="Smoothie a ¡Buen Precio en Chile! | La Mesa de Todos"
          description="Descubre acá todos los Smoothie a Buen Precio en Chile que tenemos disponibles. Tienen un sabor único y consistencia deliciosa para que disfrutes ¡Elígelos!"
        />
      )}
      {isRoutePage === '/bebestible/smoothie/frutas' && (
        <MetaTags
          title="Smoothie de Frutas a ¡Precios Convenientes! | La Mesa de Todos"
          description="Encuentra acá tu Smoothie de Frutas a Precio Conveniente. Se trata de una forma entretenida de comer y tomar fruta. Son 100% naturales y veganos ¡Revisa más!"
        />
      )}
    </>
  );
};

export default BebestiblesMetasTags;
