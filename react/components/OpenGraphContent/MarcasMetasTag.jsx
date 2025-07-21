import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const MarcasMetasTag = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;
  return (
    <>
      {isRoutePage === '/pages/haagen-dazs' && (
        <MetaTags
          title="Helados Haagen Dazs | La Mesa de Todos | Pide Online"
          description="Encuentra todas las variedades de helados Haagen Dazs y disfruta de su delicada y suave textura, y delicioso sabor. Despacho 24 hrs en RM."
        />
      )}
      {isRoutePage === '/pages/nature-valley' && (
        <MetaTags
          title="Barritas de Cereal Nature Valley | La mesa de todos | Despacho 24 hrs en RM"
          description="El snack perfecto para llevar donde quieras, ricas y saludables. Ideal para complementar tu entremaniento al aportar energía acompañada de un delicioso sabor."
        />
      )}
      {isRoutePage === '/pages/bou' && (
        <MetaTags
          title="Fruta Congelada | Despacho en 24 hrs RM | La Mesa de Todos"
          description="Las mejores promociones para tu casa: congelados, abarrotes, salsas. Pedidos sobre $30.000 envío gratis. Aceptamos todo medio de pago. ¡Pide ahora!"
        />
      )}
      {isRoutePage === '/pages/betty-crocker' && (
        <MetaTags
          title="Pre-Mezclas de Galletas y Brownies Betty Crocker | LMDT"
          description="Encuentra las mejores pre-mezclas con despacho en 24 horas. Haz tu pedido online. Instrucciones y recetas aquí. Fácil preparación ¡Pruébalas! "
        />
      )}
      {isRoutePage === '/pages/flip' && (
        <MetaTags
          title="Snacks & Chips de Frutas y Verduras | La Mesa de Todos"
          description="Descubre la deliciosa gama de productos San José: Atún y Jurel. Nuestros productos son una fuente de proteína de alta calidad y ricos en ácidos grasos omega-3, ideales para una alimentación saludable y equilibrada. ¡Agrega sabor y nutrición a tus comidas con San José!"
        />
      )}
      {isRoutePage === '/pages/san-jose' && (
        <MetaTags
          title="Lomos de Atún y Jurel en Aceite | La Mesa de Todos | Pide Online"
          description="Descubre la deliciosa gama de productos San José: Atún y Jurel.  Excelente fuente de proteína de alta calidad y ricos en ácidos grasos omega-3."
        />
      )}
      {isRoutePage === '/pages/petfood' && (
        <MetaTags
          title="Comida para Perros y Gatos | Despacho en 24 hrs RM| LMDT"
          description="Tu elección de confianza en alimentos para mascotas de origen marino. Ayuda a mantener la piel y el pelaje brillante. Rico en Omega-3."
        />
      )}
      {isRoutePage === '/pages/gentil' && (
        <MetaTags
          title="Abarrotes y Conservas Gentil | La Mesa de Todos "
          description="Contamos con los mejores abarrotes que pueda encontrar en un almacén, desde las mejores pastas, hasta esas ricas conservas que le darán el cierre merecido a sus comidas."
        />
      )}
      {isRoutePage === '/pages/mascotas' && (
        <MetaTags
          title="Alimento de Mascotas | La Mesa de Todos"
          description="En la Mesa de Todos podrás encontrar las mejores Marcas: Petmarine y Fish4pets. Productos de origen marino. Ricos en Omega 3. Alta calidad y rico en proteinas."
        />
      )}
      {isRoutePage === '/pages/ox' && (
        <MetaTags
          title="Carnes Premium OX | La Mesa de Todos"
          description="Encuentra las mejores carnes premium de OX, con despacho a gratis por compras sobre $30.000 en RM, V, VI y VIII.  Los mejores cortes de carne de cerdo y vacuno."
        />
      )}
      {isRoutePage === '/pages/petmarine' && (
        <MetaTags
          title="Pet Marine | Alimento de Mascota | Despacho RM, V, VI y VIII."
          description="Alimento húmedo para perros y gatos para todas las edades en base a Jurel del pacifico. Libre de antibioticos, hormonas y conservantes. Productos de alta calidad y ricos en Omega-3"
        />
      )}
      {isRoutePage === '/pages/fish4pets' && (
        <MetaTags
          title="Alimento Fish4pets para perros y gatos | Despacho 24 hrs RM | Venta Online"
          description="Alimento seco y húmedo para perros y gatos de origen marino. No contienbe Glutén, ricos en acidos grasos Omega-3. Alimentos sin Cereales,"
        />
      )}
    </>
  );
};

export default MarcasMetasTag;
