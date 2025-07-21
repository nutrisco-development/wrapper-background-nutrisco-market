import React from 'react';
import {Helmet} from 'vtex.render-runtime';

const MetaTags = (props) => {
  let title = props.title;
  let description = props.description;

  const titleDefault = 'Tienda Online de Alimentos y Comida para comprar en Chile';
  const descriptionDefault =
    'Entra a nuestra Tienda Online de Alimentos y Comida. Descubre las categorías y productos que te ofrecemos. ¡Puedes comprar con Despacho en Santiago!';

  let titleMetaTag = title === undefined ? titleDefault : props.title;
  let descriptionMetaTag = title === undefined ? descriptionDefault : props.description;

  return (
    <Helmet>
      <title>{titleMetaTag}</title>
      {/* navegador */}
      <meta name="robots" content="index" />
      <meta name="title" content={titleMetaTag} />
      <meta name="description" content={descriptionMetaTag} />
      <meta name="language" content="es" />
      <meta name="author" content="La Mesa de Todos" />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="es_CL" />
      <link rel="canonical" href="https://www.lamesadetodos.cl/" />
      {/* opengraph */}
      <meta property="og:title" content={titleMetaTag} />
      <meta property="og:description" content={descriptionMetaTag} />
      <meta property="og:url" content="https://www.lamesadetodos.cl/" />
      <meta property="og:image" content="http://orizonb2ccl.vtexassets.com/arquivos/LA-MESA-DE-TODOS-COVER-OG-NUEVO.jpg" />
      <meta property="og:image:secure_url" content="https://orizonb2ccl.vtexassets.com/arquivos/LA-MESA-DE-TODOS-COVER-OG-NUEVO.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="La Mesa de Todos" />
      <meta property="og:locale" content="es_CH" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={1200} />
      <meta property="og:image:height" content={630} />
      {/* twitter */}
      <meta name="twitter:domain" content="lamesadetodos.cl" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="La Mesa de Todos" />
      <meta name="twitter:creator" content="La Mesa de Todos" />
      <meta name="twitter:url" content="https://www.lamesadetodos.cl/" />
      <meta name="twitter:title" content={titleMetaTag} />
      <meta name="twitter:description" content={descriptionMetaTag} />
      <meta name="twitter:image" content="https://orizonb2ccl.vtexassets.com/arquivos/LA-MESA-DE-TODOS-COVER-OG-NUEVO.jpg" />
    </Helmet>
  );
};

export default MetaTags;
