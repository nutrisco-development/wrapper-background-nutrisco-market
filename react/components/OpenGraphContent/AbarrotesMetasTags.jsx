import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const AbarrotesMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/abarrote' && (
        <MetaTags
          title="Tienda de Abarrotes Online en Chile | La Mesa de Todos"
          description="Encuentra acá nuestra Tienda de Abarrotes 100% Online en Chile con productos de gran calidad y destacadas marcas. Contamos con excelentes ofertas ¡Compra hoy!"
        />
      )}

      {isRoutePage === '/abarrote/aceites-y-alinos' && (
        <MetaTags
          title="Venta de Aceites y Aliños en Chile a ¡Precios Oferta! | La Mesa de Todos"
          description="Aprovecha nuestra Venta de Aceites y Aliños en Chile a ¡Precios Oferta! Tenemos una gran variedad de productos de muy buena calidad ¡Revisa más acá!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/aceite' && (
        <MetaTags
          title="Venta de Aceites Comestibles en Chile | La Mesa de Todos"
          description="Descubre nuestra Venta de Aceites Comestibles en Chile para preparar deliciosas recetas de comida, muy saludables y rápidas. ¡Haz tu compra online aquí!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/aderezos' && (
        <MetaTags
          title="Venta de Aderezos para Ensaladas en Chile | La Mesa de Todos"
          description="Encuentra acá los mejores aderezos para ensaladas en Chile, revisa nuestro catálogo a precios de venta convenientes. ¡Haz tu pedido con despacho a domicilio!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/salsas' && (
        <MetaTags
          title="Venta de Salsas Gourmet Online | La Mesa de Todos"
          description="Revisa acá nuestra Venta Online de Salsas Gourmet, ideal para potenciar el sabor de tus preparaciones. Condimentos de primera calidad para ti ¡Compra el tuyo!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/sazonador' && (
        <MetaTags
          title="Venta de Sazonadores Online | La Mesa de Todos"
          description="Descubre nuestra Venta de Sazonadores 100% Online con entrega hasta la puerta de tu casa. Condimenta cualquier tipo de receta con ellos ¡Elige el tuyo!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/sucedaneos' && (
        <MetaTags
          title="Venta de Sucedáneos en Chile | La Mesa de Todos"
          description="Encuentra acá nuestra Venta de Sucedáneos en Chile para disfrutar de todas tus ensaladas. Ahora prepara tus recetas de manera rápida ¡Haz tu pedido online!"
        />
      )}
      {isRoutePage === '/abarrote/aceites-y-alinos/vinagre' && (
        <MetaTags
          title="Venta de Vinagre a Domicilio en Chile | La Mesa de Todos "
          description="Encuentra acá nuestra Venta de Vinagre a Domicilio en Chile para mayor comodidad en la cocina. Además de su gran sabor, es un muy buen antioxidante ¡Cómpralo!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres' && (
        <MetaTags
          title="Venta de Arroz Online con ¡Despacho a Domicilio! | La Mesa de Todos"
          description="Conoce nuestra Venta de Arroz 100% Online con ¡Despacho a Domicilio! Ahora puedes hacer una exquisita paella o pollo al jugo acompañado de arroz ¡Pruébalo!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/arroz' && (
        <MetaTags
          title="Venta de Arroz Online en Chile | La Mesa de Todos"
          description="Revisa aquí nuestra Venta de Arroz Online en Chile para prepararlo a la valenciana o como tú quieras. La cocina nunca había sido tan práctica ¡Haz tu pedido!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/porotos' && (
        <MetaTags
          title="Venta de Porotos Online ¡Disponible en Chile! | La Mesa de Todos"
          description="Aprovecha nuestra Venta de Porotos Online ¡Disponible en Chile! Ideal para preparaciones típicas chilenas. Además aportan nutrientes ¡Pruébalos hoy!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa' && (
        <MetaTags
          title="Venta de Quinoa 100% Online en Chile | La Mesa de Todos"
          description="Venta de Quinoa 100% Online en Chile con despacho hasta la puerta de tu casa. Es un alimento muy saludable que aporta nutrientes ¡Aprovecha su precio oferta!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa/desayunos-y-dulces' && (
        <MetaTags
          title="Venta de Dulces Online con ¡Despacho a Domicilio en Chile! | La Mesa de Todos"
          description="Tenemos una destacada Venta de Dulces Online con ¡Despacho a Domicilio en Chile! Te ofrecemos una gran variedad de productos de primera calidad ¡Cómpralos!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa/desayunos-y-dulces/cafe' && (
        <MetaTags
          title="Venta de Café Online en Chile | La Mesa de Todos"
          description="Venta de Café Online en Chile a bajos precios y excelente calidad. Te brindamos la mejor experiencia para que disfrutes de un rico café ¡Pide el tuyo ahora!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa/desayunos-y-dulces/chocolate' && (
        <MetaTags
          title="Venta de Chocolates Online ¡Despacho en Chile! | La Mesa de Todos"
          description="Encuentra aquí nuestra Venta de Chocolates Online con Despacho en Chile. Tienen un exquisito sabor y fascinante textura que alegrarán tu día ¡Revisa más!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa/desayunos-y-dulces/galleta' && (
        <MetaTags
          title="Venta de Galletas en Chile con ¡Despacho a Domicilio! | La Mesa de Todos "
          description="Revisa aquí nuestra Venta de Galletas en Chile con una gran variedad para que puedas elegir la que más te guste. ¡Tenemos Despacho a Domicilio!"
        />
      )}
      {isRoutePage === '/abarrote/arroz-y-legumbres/quinoa/desayunos-y-dulces/miel' && (
        <MetaTags
          title="Venta de Miel 100% Online en Chile | La Mesa de Todos"
          description="Disfruta de nuestra Venta de Miel 100% Online en Chile. Se trata de un superalimento lleno de beneficios para ti ¡Recibe tu pedido en la puerta de tu casa!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas' && (
        <MetaTags
          title="Venta de Harinas ¡Pide la tuya Online! | La Mesa de Todos "
          description="Conoce nuestra Venta de Harinas para que hagas todas las preparaciones que tú quieras. Sorprende a tu familia con deliciosos platos ¡Pide la tuya Online!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie' && (
        <MetaTags
          title="Venta de Brownie Online a Domicilio | La Mesa de Todos"
          description="Venta de Brownie 100% Online a Domicilio para que disfrutes de un exquisito postre. Lo puedes acompañar con helado para una tarde refrescante ¡Haz tu compra!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/galletas' && (
        <MetaTags
          title="Venta de Galletas a Domicilio en Chile | La Mesa de Todos"
          description="Conoce nuestra Venta de Galletas a Domicilio en Chile con la mejor calidad y bajos precios. No hay nada como disfrutar de unas ricas galletas ¡Elige la tuya!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/glaseado' && (
        <MetaTags
          title="Venta de Glaseados Online con ¡Despacho a domicilio! | La Mesa de Todos"
          description="Revisa acá nuestra Venta de Glaseados Online con ¡Despacho a domicilio! Ideal para agregar tu toque especial y decorar tus creaciones ¡Pide el tuyo!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/harinas' && (
        <MetaTags
          title="Venta de Harinas Online ¡Pide tu Delivery! | La Mesa de Todos"
          description="Venta de Harinas 100% Online para que hagas una gran variedad de recetas. Sorprende a tus comensales con un plato exquisito ¡Pide tu Delivery con nosotros!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/muffins' && (
        <MetaTags
          title="Para Comprar Muffins Online ¡Hazlo Acá! | La Mesa de Todos"
          description="
Para Comprar Muffins Online ¡Hazlo Acá! Tenemos los mejores precios para que disfrutes de lo que más te gusta. Tu pedido llegará hasta tu casa ¡Elígelo!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/panqueques' && (
        <MetaTags
          title="Venta de Panqueques ¡Servicio a domicilio! | La Mesa de Todos"
          description="Conoce nuestra Venta de Panqueques, ideales para sorprender a tus invitados, porque quedarán esponjosos y deliciosos ¡Tenemos despacho a domicilio aquí!"
        />
      )}
      {isRoutePage === '/abarrote/harinas-y-premezclas/brownie/tortas' && (
        <MetaTags
          title="Venta de Tortas ¡Compra a domicilio! | La Mesa de Todos "
          description="Venta de Tortas para sorprender a todos tus invitados. Tenemos distintos sabores a bajos precios para que elijas el que más te gusta ¡Compra a domicilio acá!"
        />
      )}
      {isRoutePage === '/abarrote/pastas-y-salsas' && (
        <MetaTags
          title="Venta de Pastas y Salsas a Domicilio ¡Haz tu compra Online! | La Mesa de Todos"
          description="Venta de Pastas y Salsas a Domicilio para que disfrutes de los más exquisitos sabores. Prepara un delicioso almuerzo o cena ¡Haz tu compra Online acá!"
        />
      )}
      {isRoutePage === '/abarrote/pastas-y-salsas/pastas' && (
        <MetaTags
          title="Si quieres Comprar Pastas 100% Online ¡Entra Aquí! | La Mesa de Todos"
          description="Si quieres Comprar Pastas de manera 100% Online ¡Entra Aquí! Tenemos gran variedad a precios imperdibles para que disfrutes comiendo rico ¡Haz tu pedido!"
        />
      )}
      {isRoutePage === '/abarrote/pastas-y-salsas/salsa-de-tomate' && (
        <MetaTags
          title="Salsa de Tomate ¡Aprovecha su Venta Online! | La Mesa de Todos "
          description="Descubre la Salsa de Tomate que tenemos a precio oferta para preparar pizzas o pastas. Como tú quieras. ¡Aprovecha ahora nuestra Venta Online acá!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel' && (
        <MetaTags
          title="Venta de Snack y Cóctel Online | La Mesa de Todos"
          description="Revisa nuestra Venta de Snack y Cóctel de manera Online para que no te muevas de tu casa. Ahora para tus fiestas y celebraciones tendrás lo mejor ¡Entra acá!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel/barritas' && (
        <MetaTags
          title="Venta de Barritas de Cereal ¡Compra Online! | La Mesa de Todos"
          description="Venta de Barritas de Cereal para que tus hijos lleven de colación al colegio o tú al trabajo. Son deliciosas y muy nutritivas. ¡Compra Online con nosotros!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel/brownies' && (
        <MetaTags
          title="Venta de Brownies 100% Online ¡Disponible en Chile! | La Mesa de Todos"
          description="Venta de Brownies 100% Online en Chile para que disfrutes de su sabor único. Comparte con tu familia y amigos un delicioso bizcocho de chocolate ¡Cómpralo!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel/compotas' && (
        <MetaTags
          title="Venta de Compotas de Frutas ¡Compra Online en Chile! | La Mesa de Todos"
          description="Conoce nuestra Venta de Compotas de Frutas, son deliciosas y cremosas para que tus hijos disfruten de un postre 100% natural. ¡Compra Online en Chile acá!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel/frutos-secos' && (
        <MetaTags
          title="Tienda de Frutos Secos ¡Para Comprar Online Acá! | La Mesa de Todos"
          description="Entra a nuestra Tienda de Frutos Secos para comprar 100% online con despacho hasta tu casa. Tenemos la variedad que estás buscando ¡Revisa más aquí!"
        />
      )}
      {isRoutePage === '/abarrote/snack-y-coctel/snacks' && (
        <MetaTags
          title="Venta de Snack Saludables 100% Online en Chile | La Mesa de Todos"
          description="Venta de Snack Saludables 100% Online en Chile para que disfrutes comiendo sano y rico. Tienen muchas propiedades que deberías conocer. ¡Pide el tuyo ahora!"
        />
      )}
    </>
  );
};

export default AbarrotesMetasTags;
