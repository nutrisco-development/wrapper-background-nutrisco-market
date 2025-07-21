import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const EmpresaMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/empresa/bases-y-condiciones' && (
        <MetaTags
          title="Bases y condiciones | La Mesa de Todos | Ingresa aquí"
          description="Conoce aquí sobre los términos de las bases y condiciones de La Mesa de Todos"
        />
      )}
      {isRoutePage === '/empresa/politicas-de-envio' && (
        <MetaTags
          title="Envíos y Despachos | La Mesa de Todos | Ingresa aquí"
          description="Informate aquí sobre envíos y despachos de La Mesa de Todos."
        />
      )}
      {isRoutePage === '/empresa/politicas-de-privacidad' && (
        <MetaTags
          title="Politicas de Privacidad | La Mesa de Todos | Ingresa aquí"
          description="Conoce aquí sobre las politicas de privacidad de La Mesa de Todos"
        />
      )}
      {isRoutePage === '/empresa/medios-de-pagos' && (
        <MetaTags
          title="Medios de Pago | La Mesa de Todos | Ingresa aquí"
          description="Nuestros Medios de Pagos es através de tarjetas de crédito y débito emitidas en Chile,"
        />
      )}
      {isRoutePage === '/empresa/contactanos' && (
        <MetaTags
          title="Contáctanos | La Mesa de Todos | Ingresa aquí"
          description="Contáctanos através de nuestro WhatsApp, a nuestra línea telefonica 600 500 1010, nuestro correo contacto@lamesadetodos.cl o através de nuestras redes sociales facebook o instagram. "
        />
      )}
      {isRoutePage === '/empresa/nosotros' && (
        <MetaTags title="Nosotros | La Mesa de Todos | Ingresa aquí" description="Nosotros - Mesa de Todos" />
      )}
      {isRoutePage === '/empresa/marcas' && (
        <MetaTags title="Nuestras Marcas | La Mesa de Todos | Ingresa aquí" description="Nuestras Marcas - Mesa de Todos" />
      )}
      {isRoutePage === '/empresa/preguntas-frecuentes' && (
        <MetaTags title="Preguntas Frecuentes | La Mesa de Todos | Ingresa aquí" description="Preguntas Frecuentes - Mesa de Todos" />
      )}
      {isRoutePage === '/empresa/bases-concurso-dia-del-nino' && (
        <MetaTags
          title="Base de Concurso - Día del Niño | La Mesa de Todos"
          description="Base de Concurso - Día del Niño - Mesa de Todos"
        />
      )}
    </>
  );
};

export default EmpresaMetasTags;
