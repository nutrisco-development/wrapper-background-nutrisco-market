import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import MetaTags from './MetaTags';

const PremiumMetasTags = () => {
  const {route} = useRuntime();
  const isRoutePage = route.canonicalPath;

  return (
    <>
      {isRoutePage === '/premium' && <MetaTags title="Premium | La Mesa de Todos" description="Premium - La Mesa de Todos" />}
      {isRoutePage === '/premium/atun' && <MetaTags title="Atún | La Mesa de Todos" description="Atún - La Mesa de Todos" />}
      {isRoutePage === '/premium/centolla' && <MetaTags title="Centolla | La Mesa de Todos" description="Centolla - La Mesa de Todos" />}
      {isRoutePage === '/premium/jurel' && <MetaTags title="Jurel | La Mesa de Todos" description="Jurel - La Mesa de Todos" />}
      {isRoutePage === '/premium/loco' && <MetaTags title="Locos | La Mesa de Todos" description="Locos - La Mesa de Todos" />}
      {isRoutePage === '/premium/machas' && <MetaTags title="Machas | La Mesa de Todos" description="Machas - La Mesa de Todos" />}
      {isRoutePage === '/premium/salmon' && <MetaTags title="Salmon | La Mesa de Todos" description="Salmon - La Mesa de Todos" />}
    </>
  );
};

export default PremiumMetasTags;
