import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const FrescosLacteosMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/frescos-y-lacteos' && (
        <MetaTags title="Frescos y Lácteos | La Mesa de Todos" description="Frescos y Lácteos - La Mesa de Todos" />
      )}
      {isRoutePage === '/frescos-y-lacteos/margarina' && (
        <MetaTags title="Margarina | La Mesa de Todos" description="Margarina - La Mesa de Todos" />
      )}
      {isRoutePage === '/frescos-y-lacteos/margarina/cremosa' && (
        <MetaTags title="Margarina Cremosa | La Mesa de Todos" description="Margarina Cremosa - La Mesa de Todos" />
      )}
      {isRoutePage === '/frescos-y-lacteos/margarina/vegetal' && (
        <MetaTags title="Margarina Vegetal | La Mesa de Todos" description="Margarina Vegetal - La Mesa de Todos" />
      )}
      {isRoutePage === '/frescos-y-lacteos/quesos' && (
        <MetaTags title="Quesos | La Mesa de Todos" description="Quesos - La Mesa de Todos" />
      )}
      {isRoutePage === '/frescos-y-lacteos/quesos/oveja' && (
        <MetaTags title="Queso Oveja | La Mesa de Todos" description="Queso Oveja - La Mesa de Todos" />
      )}
    </>
  );
};

export default FrescosLacteosMetasTags;
