import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const CongeladosMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/congelados' && (
        <MetaTags
          title="Venta de Productos y Alimentos Congelados a Domicilio | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta de Productos y Alimentos Congelados a Domicilio. Tenemos muchas categorías para que elijas todo lo que necesitas ¡Compra ahora!"
        />
      )}
      {isRoutePage === '/congelados/carnes' && (
        <MetaTags
          title="Carne Congelada a Domicilio ¡Para Comprar Online Aquí! | La Mesa de Todos"
          description="Compra acá Carne Congelada de la mejor calidad con entrega a Domicilio. Tienes muchas alternativas para que comas delicioso. Para Comprar Online ¡Hazlo Aquí!"
        />
      )}
      {isRoutePage === '/congelados/carnes/cerdo' && (
        <MetaTags
          title="Venta de Carne de Cerdo Congelada a Domicilio | La Mesa de Todos"
          description="Revisa aquí nuestra Venta de Carne de Cerdo Congelada con despacho a Domicilio. Ahora tus productos llegan hasta la puerta de tu hogar ¡Compra con nosotros!"
        />
      )}
      {isRoutePage === '/congelados/carnes/pavo' && (
        <MetaTags
          title="Venta de Pavo Congelado al ¡Mejor Precio! | La Mesa de Todos"
          description="Conoce aquí nuestra Venta de Pavo Congelado al Mejor Precio y excelente calidad. Puedes hacer recetas deliciosas para sorprender a tu familia ¡Compra ahora!"
        />
      )}
      {isRoutePage === '/congelados/carnes/pollo' && (
        <MetaTags
          title="Venta de Pollo Congelado ¡A Domicilio! | La Mesa de Todos"
          description="Encuentra acá nuestra Venta de Pollo Congelado con despacho A Domicilio. Es proteína fresca de primera calidad para todas tus comidas ¡Tenemos precios oferta!
          "
        />
      )}
      {isRoutePage === '/congelados/carnes/vacuno' && (
        <MetaTags
          title="Venta de Carne de Vacuno Congelada en Chile ¡A Domicilio! | La Mesa de Todos"
          description="Descubre acá nuestra Venta de Carne de Vacuno Congelada disponible en Chile con despacho A Domicilio. Te brindamos alimentos de calidad a ¡Excelente precio!
          "
        />
      )}
      {isRoutePage === '/congelados/frutas-y-verduras' && (
        <MetaTags
          title="Venta de Frutas y Verduras Congeladas a Domicilio ¡Compra Online! | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta de Frutas y Verduras Congeladas a Domicilio de la más alta calidad. Tenemos los mejores precios ¡Compra Online con nosotros!"
        />
      )}
      {isRoutePage === '/congelados/frutas-y-verduras/frutas' && (
        <MetaTags
          title="Venta de Frutas Congeladas ¡Disponible en Chile! | La Mesa de Todos"
          description="Conoce acá nuestra Venta de Frutas Congeladas con productos exclusivos. Puedes hacer exquisitos postres para tu familia ¡Están Disponibles en Chile!"
        />
      )}
      {isRoutePage === '/congelados/frutas-y-verduras/verduras' && (
        <MetaTags
          title="Verduras Congeladas ¡Para Comprar Online Acá! | La Mesa de Todos"
          description="Obtén acá tus Verduras Congeladas de la más alta calidad a excelentes precios. Cocina con distintos colores. Para Comprar Online ¡Hazlo Acá!"
        />
      )}
      {isRoutePage === '/congelados/frutas-y-verduras/paltas' && (
        <MetaTags
          title="Venta de Pastas Congeladas a Domicilio | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta de Pastas Congeladas a Domicilio con excelentes precios. La cocina italiana llegó a tu hogar ¡Come y disfruta junto a tu familia!"
        />
      )}
      {isRoutePage === '/congelados/frutas-y-verduras/veggies' && (
        <MetaTags
          title="Productos Veggies ¡Compra Vegetales Congelados en Chile! | La Mesa de Todos"
          description="Elige acá tus Productos Veggies con variedad de productos y colores. Aprovecha nuestros precios oferta ¡Compra Vegetales Congelados en Chile ahora!"
        />
      )}
      {isRoutePage === '/congelados/helados' && (
        <MetaTags
          title="Venta de Helados Online ¡Pide a Domicilio! | La Mesa de Todos"
          description="Conoce aquí nuestra Venta de Helados Online con los mejores precios del mercado. Disfruta de sus exquisitos sabores ¡Pide el tuyo a Domicilio hoy!"
        />
      )}
      {isRoutePage === '/congelados/helados/duo' && (
        <MetaTags
          title="Helados Duo ¡Para Comprar Online Acá! | La Mesa de Todos"
          description="Disfruta de los deliciosos Helados Duo a un precio imperdible y ricos sabores. No puedes dejar de probarlos con tus amigos. Para Comprar Online ¡Hazlo Acá!"
        />
      )}
      {isRoutePage === '/congelados/helados/cups' && (
        <MetaTags
          title="Helados Cups a ¡Excelentes Precios! | La Mesa de Todos"
          description="Escoge acá nuestros Helados Cups a Excelentes Precios y calidad de primera. No te vas a poder resistir con todos los sabores que tenemos disponibles ¡Compra!"
        />
      )}
      {isRoutePage === '/congelados/helados/minicups' && (
        <MetaTags
          title="Helados Mini Cups ¡Disponibles Acá! | La Mesa de Todos"
          description="Obtén tus Helados Mini Cups disponibles para compra online y despacho a domicilio. Disfruta sin moverte de tu hogar ¡Elige el tuyo y comparte con tu familia!"
        />
      )}
      {isRoutePage === '/congelados/helados/paletas' && (
        <MetaTags
          title="Venta de Paletas de Helados ¡Prueba sus sabores! | La Mesa de Todos"
          description="Aprovecha aquí nuestra Venta de Paletas de Helados ¡Prueba sus distintos sabores! De seguro quedarás encantado con su textura ¡Cómpralas online ahora!"
        />
      )}
      {isRoutePage === '/congelados/mariscos' && (
        <MetaTags
          title="Venta de Mariscos y Productos Congelados a Domicilio | La Mesa de Todos"
          description="Encuentra aquí nuestra Venta de Mariscos y Productos Congelados con despacho a Domicilio para hacer entradas y recetas deliciosas, como paella ¡Elígela!"
        />
      )}
      {isRoutePage === '/congelados/mariscos/camarones' && (
        <MetaTags
          title="Venta de Camarones Congelados para ¡Comprar Online! | La Mesa de Todos"
          description="Conoce acá nuestra Venta de Camarones Congelados para Comprar Online con despacho hasta la puerta de tu hogar. Disfruta con los tuyos ¡Escoge tus camarones!"
        />
      )}
      {isRoutePage === '/congelados/mariscos/choritos' && (
        <MetaTags
          title="Choritos Congelados a ¡Precio Oferta! | La Mesa de Todos"
          description="Obten aquí tus Choritos Congelados a Precio Oferta y calidad de primera. Con ellos puedes realizar distintos platillos calientes o fríos ¡Come delicioso hoy!"
        />
      )}
      {isRoutePage === '/congelados/mariscos/surtido' && (
        <MetaTags
          title="Venta de Surtido de Mariscos Congelados ¡Compra Online! | La Mesa de Todos"
          description="Descubre acá nuestra Venta de Surtido de Mariscos Congelados para preparar las más variadas recetas. Disfruta comiendo rico ¡Compra Online con nosotros hoy!"
        />
      )}
      {isRoutePage === '/congelados/mariscos/paila-marina' && (
        <MetaTags
          title="Paila Marina Congelada a Domicilio | La Mesa de Todos"
          description="Obtén aquí tu Paila Marina Congelada de la más alta calidad con despacho a Domicilio. Nunca fue más sencillo comer rico ¡Escoge tu producto y disfruta hoy!"
        />
      )}
      {isRoutePage === '/congelados/pescados' && (
        <MetaTags
          title="Venta de Pescado Congelado a Domicilio | La Mesa de Todos"
          description="Encuentra aquí nuestra Venta de Pescado Congelado con despacho a Domicilio. Prepara platos nutritivos y deliciosos en simples pasos ¡Haz tu pedido online hoy!"
        />
      )}
      {isRoutePage === '/congelados/pescados/atun' && (
        <MetaTags
          title="Venta de Atún Congelado ¡Disponible Online! | La Mesa de Todos"
          description="Conoce aquí nuestra Venta de Atún Congelado Online con despacho a domicilio. Nunca fue más fácil disfrutar de tus productos favoritos ¡Realiza tu pedido!"
        />
      )}
      {isRoutePage === '/congelados/pescados/jurel' && (
        <MetaTags
          title="Jurel Congelado ¡Para Compra Online en Chile! | La Mesa de Todos"
          description="Adquiere acá tu Jurel Congelado disponible Para Compra Online en Chile a precio imperdible. Es un producto 100% natural que aporta proteínas ¡Cómpralo ahora!"
        />
      )}
      {isRoutePage === '/congelados/pescados/merluza' && (
        <MetaTags
          title="Venta de Merluza Congelada ¡Compra Online! | La Mesa de Todos"
          description="Conoce hoy nuestra Venta de Merluza Congelada, uno de los pescados más consumidos en Chile. Aporta Omega 3 y proteínas ¡Compra Online acá con nosotros!"
        />
      )}
      {isRoutePage === '/congelados/pescados/reineta' && (
        <MetaTags
          title="Venta de Reineta Congelada ¡A Domicilio en Chile! | La Mesa de Todos"
          description="Aprovecha acá nuestra Venta de Reineta Congelada con despacho A Domicilio en Chile. Es un producto fresco y de la más alta calidad ¡Haz tu compra online hoy!"
        />
      )}
      {isRoutePage === '/congelados/pescados/salmon' && (
        <MetaTags
          title="Venta de Salmón Congelado ¡A Domicilio! | La Mesa de Todos"
          description="Elige hoy nuestra Venta de Salmón Congelado con despacho A Domicilio, excelente precio y destacada calidad. Gran sabor, color y textura ¡Compra en línea!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados' && (
        <MetaTags
          title="Venta de Platos Congelados Online ¡Pide a Domicilio en Chile! | La Mesa de Todos"
          description="Encuentra acá nuestra Venta de Platos Congelados Online con calidad garantizada a un precio imperdible ¡Pide a Domicilio HOY en Chile con nosotros!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados/empanadas' && (
        <MetaTags
          title="Venta de Empanadas Congeladas Online ¡Haz tu Pedido a Domicilio! | La Mesa de Todos"
          description="Elige nuestra Venta de Empanadas Congeladas Online con despacho hasta tu hogar. Sorprende a tus comensales con calidad única ¡Haz tu Pedido a Domicilio HOY!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados/pastas' && (
        <MetaTags
          title="Venta de Pastas Congeladas ¡Pide la Tuya a Domicilio! | La Mesa de Todos"
          description="Aprovecha aquí nuestra Venta de Pastas Congeladas con los mejores ingredientes italianos que se destacan por su perfecto sabor ¡Pide la Tuya a Domicilio hoy!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados/pizzas' && (
        <MetaTags
          title="Venta de Pizza Congelada a Domicilio | La Mesa de Todos"
          description="Encuentra aquí nuestra Venta de Pizza Congelada con despacho a Domicilio para fiestas y celebraciones. Ofrécele a tus invitados calidad y sabor ¡Cómprala!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados/quiches' && (
        <MetaTags
          title="Quiches Congelados con Venta Online ¡Pide a Domicilio! | La Mesa de Todos"
          description="Elige acá nuestros Quiches Congelados con Venta Online y despacho a domicilio. Nada más rico y sencillo de disfrutar con tus invitados ¡Pide a Domicilio HOY!"
        />
      )}
      {isRoutePage === '/congelados/platos-preparados/arroz' && (
        <MetaTags
          title="Arroz Congelado con Venta Online ¡Haz tu pedido a Domicilio! | La Mesa de Todos"
          description="Conoce aquí nuestro Arroz Congelado con Venta Online y destacado precio. Nunca fue tan sencillo disfrutar de exquisita comida ¡Haz tu pedido a Domicilio hoy!"
        />
      )}
    </>
  );
};

export default CongeladosMetasTags;
