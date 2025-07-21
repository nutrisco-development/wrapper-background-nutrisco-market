import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const RecetasMetasTag = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/recetarios' && (
        <MetaTags
          title="Las Mejores Recetas | La Mesa de Todos"
          description="En la Mesa de Todos podrás encontrar el paso a paso de las mejores recetas, junto a los mejores productos para realizar exquisitas preparaciones."
        />
      )}
      {isRoutePage === '/recetarios/ceviche-de-atun' && (
        <MetaTags
          title="Receta Ceviche de Atún | La Mesa de Todos"
          description="En La Mesa de Todos encontrarás recetas para sorprender a tus invitados: ceviches de Atún y Jurel."
        />
      )}
      {isRoutePage === '/recetarios/ceviche-de-lomos-de-jurel' && (
        <MetaTags
          title="Ceviche de lomos de Jurel | La Mesa de Todos | Recetas de comida"
          description="¿No sabes que cocinar? Sorprende con nuestros exquisitos productos con entrega en domicilio."
        />
      )}
      {isRoutePage === '/recetarios/chupe-de-jurel' && (
        <MetaTags
          title="Receta Chupe de Jurel | La Mesa de Todos | Recetas para tu cocina"
          description="En La Mesa de Todos encuentra las mejores recetas de cocina, para que puedas preparar y disfrutar de la mejor comida día a día con despacho a tu casa"
        />
      )}
      {isRoutePage === '/recetarios/albondigas-de-jurel-con-salsa-de-tomates' && (
        <MetaTags
          title="Receta Albóndigas de Jurel Con salsa de tomates | La Mesa de Todos | Pide Online"
          description="¿Buscas Recetas de jurel o atún? Conoce nuestras opciones de productos para que realices las mejores preparaciones para tu mesa."
        />
      )}
      {isRoutePage === '/recetarios/filetes-de-jurel-con-pure-de-arvejas' && (
        <MetaTags
          title="Filetes de Jurel con puré de arvejas | La Mesa de Todos | Despacho a Domicilio"
          description="¿Cómo hacer filetes de jurel? Descubre esta receta, realiza el paso a paso y sorprende a tu familia."
        />
      )}
      {isRoutePage === '/recetarios/arroz-cremoso-de-jurel' && (
        <MetaTags
          title="Sorprende con Arroz cremoso y Jurel | La Mesa de Todos | Receta de comida"
          description="¿Cómo preparar arroz cremoso? Clásica receta de arroz para disfruta solo o acompañado. Descubre los ingredientes aquí."
        />
      )}
      {isRoutePage === '/recetarios/albondigas-de-jurel-con-espagueti' && (
        <MetaTags
          title="Receta Albóndigas de Jurel con espagueti | La Mesa de Todos"
          description="Prepara una ricas albondigas de jurel, tambien puedes cambiar sus ingredientes por carne, atun o verduras."
        />
      )}
      {isRoutePage === '/recetarios/estofado-de-jurel-con-pimentones-asados' && (
        <MetaTags
          title="Estofado de Jurel con Espagueti | Compra en La Mesa de Todos | Recetas de Comida"
          description="Ricas recetas con Jurel en Conservas San José. Encuentralas directo en la Mesa de Todos. "
        />
      )}
      {isRoutePage === '/recetarios/choritos-con-papas' && (
        <MetaTags
          title="Receta Choritos con Papas | La Mesa de Todos | Pide Online"
          description="En La Mesa de Todos encontrarás recetas para sorprender con exquisitas preparaciones: Choritos natural y en aceite San José"
        />
      )}
      {isRoutePage === '/recetarios/choritos-thai' && (
        <MetaTags
          title="Receta Choritos Thai | La Mesa de Todos | Despacho Gratis sobre $30.000"
          description="En La Mesa de Todos encuentra las mejores recetas de cocina, para que puedas preparar y disfrutar de la mejor comida día a día con despacho a tu casa"
        />
      )}
      {isRoutePage === '/recetarios/reineta-arvejada' && (
        <MetaTags
          title="Reineta Arvejada | Receta de Comida | Compra en La Mesa de Todos"
          description="Prepara las mejores recetas con los pescados congelados San José que podrás encontrar en La Mesa de Todos: Jurel, Reineta y Merluza de 500gr. Despacho gratis por compras sobre $30.000."
        />
      )}
    </>
  );
};

export default RecetasMetasTag;
