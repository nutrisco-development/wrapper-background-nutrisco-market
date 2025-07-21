import React from 'react';
import {Helmet} from 'vtex.render-runtime';

export const Countdown = () => {
  return (
    <Helmet>
      {/* page all pages */}
      <title>Tienda Online de Alimentos y Comida para comprar en Chile | La Mesa de Todos</title>
      {/* navegador */}
      <meta name="robots" content="index" />
      <meta name="title" content="Tienda Online de Alimentos y Comida para comprar en Chile | La Mesa de Todos" />
      <meta
        name="description"
        content="Entra a nuestra Tienda Online de Alimentos y Comida. Descubre las categorías y productos que te ofrecemos. ¡Puedes comprar con Despacho en Santiago!"
      />
      <meta name="language" content="es" />
      <meta name="author" content="La Mesa de Todos" />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="es_CL" />
      <link rel="canonical" href="https://www.lamesadetodos.cl/" />
      {/* opengraph */}
      <meta property="og:title" content="Tienda Online de Alimentos y Comida para comprar en Chile | La Mesa de Todos" />
      <meta
        property="og:description"
        content="Entra a nuestra Tienda Online de Alimentos y Comida. Descubre las categorías y productos que te ofrecemos. ¡Puedes comprar con Despacho en Santiago!"
      />
      <meta property="og:url" content="https://www.lamesadetodos.cl/" />
      <meta property="og:image" content="http://orizonb2ccl.vtexassets.com/arquivos/COVER-OG-META-CYBER.jpg" />
      <meta property="og:image:secure_url" content="https://orizonb2ccl.vtexassets.com/arquivos/COVER-OG-META-CYBER.jpg" />
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
      <meta name="twitter:title" content="Tienda Online de Alimentos y Comida para comprar en Chile | La Mesa de Todos" />
      <meta
        name="twitter:description"
        content="Entra a nuestra Tienda Online de Alimentos y Comida. Descubre las categorías y productos que te ofrecemos. ¡Puedes comprar con Despacho en Santiago!"
      />
      <meta name="twitter:image" content="https://orizonb2ccl.vtexassets.com/arquivos/COVER-OG-META-CYBER.jpg" />
    </Helmet>
  );
};
