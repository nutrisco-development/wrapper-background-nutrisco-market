import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const ConservasMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/conservas' && (
        <MetaTags
          title="Venta Online de Productos en Conservas Naturales baratas | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta Online de Productos en Conservas Naturales muy baratas. Elige preparar comidas saludables y exquisitas ¡Conócenos ahora!"
        />
      )}
      {isRoutePage === '/conservas/mariscos' && (
        <MetaTags
          title="Venta de Conservas de Mariscos en Lata ¡Variedad en Enlatados! | La Mesa de Todos"
          description="Conoce acá nuestra Venta de Conservas de Mariscos en Lata a un precio muy conveniente. Disfruta la calidad y el buen sabor ¡Elige Variedad en Enlatados!"
        />
      )}
      {isRoutePage === '/conservas/mariscos/choritos' && (
        <MetaTags
          title="Choritos en Conserva a ¡Bajo Precio! En Chile | La Mesa de Todos"
          description="Obtén acá nuestros Choritos en Conserva a Bajo Precio con la mejor calidad. Disponibles en Chile por compra online ¡Llegamos hasta la puerta de tu casa!"
        />
      )}
      {isRoutePage === '/conservas/mariscos/cholgas' && (
        <MetaTags
          title="Cholgas en Conserva a ¡Precio Oferta! | La Mesa de Todos"
          description="Compra acá nuestras Cholgas en Conserva a Precio Oferta con distintas propiedades. Son Excelente Fuente de Proteínas y Omega 3 ¡Revisa más con nosotros!"
        />
      )}
      {isRoutePage === '/conservas/mariscos/otros-mariscos' && (
        <MetaTags
          title="Mariscos en Conserva ¡Disponibles en Chile! | La Mesa de Todos"
          description="Revisa aquí nuestra variedad de Mariscos en Conserva disponibles en Chile a precios imperdibles. Sorprende a tu familia comiendo rico y sano ¡Compra online!"
        />
      )}
      {isRoutePage === '/conservas/pescados' && (
        <MetaTags
          title="Venta de Conservas de Pescado Online en Chile | La Mesa de Todos"
          description="Conoce aquí nuestra Venta de Conservas de Pescado Online en Chile al mejor precio y con la calidad que nos caracteriza ¡Tenemos despacho a todo Santiago!"
        />
      )}
      {isRoutePage === '/conservas/pescados/atun' && (
        <MetaTags
          title="Venta de Atún en Conserva | La Mesa de Todos"
          description="Encuentra acá nuestra Venta de Atún en Conserva con precios imperdibles y gran calidad. Está listo para acompañar y dar sabor a tus platos ¡Cómpralo!"
        />
      )}
      {isRoutePage === '/conservas/pescados/caballa' && (
        <MetaTags
          title="Caballa en Conserva en Chile | La Mesa de Todos"
          description="Compra aquí nuestra Caballa en Conserva disponible en Chile para disfrutar en diversas preparaciones, además es muy saludable. ¡Haz tu pedido online ahora!"
        />
      )}
      {isRoutePage === '/conservas/pescados/jurel' && (
        <MetaTags
          title="Venta de Jurel en Conserva | La Mesa de Todos"
          description="Revisa acá nuestra Venta de Jurel en Conserva, viene listo para consumir. Es una excelente fuente de Omega 3 y Proteínas. ¡Conócelo en todas sus versiones!"
        />
      )}
      {isRoutePage === '/conservas/sopas' && (
        <MetaTags
          title="Conservas de Sopas | La Mesa de Todos"
          description="Descubre acá nuestras Conservas de Sopas de distintos sabores para disfrutar en casa o donde quieras. Se trata de una comida rica, lista y confiable ¡Compra!"
        />
      )}
      {isRoutePage === '/conservas/sopas/verduras' && (
        <MetaTags
          title="Sopas y Cremas en Conserva | La Mesa de Todos"
          description="Obtén aquí nuestras Sopas y Cremas en Conserva para disfrutar en familia o con amigos. Son sumamente convenientes porque vienen listas ¡Haz tu pedido hoy!"
        />
      )}
      {isRoutePage === '/conservas/sopas/legumbres' && (
        <MetaTags
          title="Sopa de Legumbres en Conserva | La Mesa de Todos"
          description="Prueba hoy nuestra Sopa de Legumbres en Conserva al mejor precio y excelente calidad. Es ideal para disfrutar con tu familia comiendo rico y sano ¡Cómprala!"
        />
      )}
      {isRoutePage === '/conservas/premium' && (
        <MetaTags
          title="Conservas de Pescado y Mariscos Premium | La Mesa de Todos"
          description="Aprovecha acá nuestras Conservas de Pescado y Mariscos Premium a un precio conveniente. La calidad de los productos es de primera ¡Haz tu pedido online ahora!"
        />
      )}
      {isRoutePage === '/conservas/premium/locos' && (
        <MetaTags
          title="Venta de Locos Cocidos en Frasco | La Mesa de Todos"
          description="Disfruta hoy con nuestra Venta de Locos Cocidos en Frasco para sorprender a tus invitados. Son ideales para presentar en platos fríos ¡Cómpralos aquí!"
        />
      )}
      {isRoutePage === '/conservas/premium/atun' && (
        <MetaTags
          title="Lomo de Atún en Aceite en Lata | La Mesa de Todos"
          description="Obtén aquí nuestro Lomo de Atún en Aceite en Lata para disfrutar en platos fríos, entradas o platos calientes como croquetas de atún ¡Haz tu compra hoy!"
        />
      )}
      {isRoutePage === '/conservas/premium/jurel' && (
        <MetaTags
          title="Filete de Jurel en Conserva | La Mesa de Todos"
          description="Encuentra aquí nuestro Filete de Jurel en Conserva al mejor precio y excelente calidad. Aprovecha y realiza platos exquisitos, variados y sanos ¡Revisa más!"
        />
      )}
    </>
  );
};

export default ConservasMetasTags;
