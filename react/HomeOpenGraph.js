import React from 'react';
import {useRuntime} from 'vtex.render-runtime';
import ConservasMetasTags from './components/OpenGraphContent/ConservasMetasTags';
import CongeladosMetasTags from './components/OpenGraphContent/CongeladosMetasTags';
import AbarrotesMetasTags from './components/OpenGraphContent/AbarrotesMetasTags';
import BebestiblesMetasTags from './components/OpenGraphContent/BebestiblesMetasTags';
import NutraceuticosMetasTags from './components/OpenGraphContent/NutraceuticosMetasTags';
import EmpresaMetasTags from './components/OpenGraphContent/EmpresaMetasTag';
import MarcasMetasTag from './components/OpenGraphContent/MarcasMetasTag';
import RecetasMetasTag from './components/OpenGraphContent/RecetasMetasTag';
import PromocionesMetasTag from './components/OpenGraphContent/PromocionesMetasTag';
import DefaultMetasTag from './components/OpenGraphContent/DefaultMetasTag';
import PremiumMetasTags from './components/OpenGraphContent/PremiumMetasTags';
import FrescosLacteosMetasTags from './components/OpenGraphContent/FrescosLacteosMetasTags';

const HomeOpenGraph = () => {
  const {page, route, getSettings} = useRuntime();
  const isPageHome = page === 'store.home';
  // const isRoutePage = route.canonicalPath;
  // const isPageProduct = page !== 'store.product';
  // const isPageSearchDepartment = page === 'store.search#department';
  return (
    <>
      {isPageHome && <DefaultMetasTag />}
      <PromocionesMetasTag />
      <CongeladosMetasTags />
      <ConservasMetasTags />
      <AbarrotesMetasTags />
      <PremiumMetasTags />
      <FrescosLacteosMetasTags />
      <BebestiblesMetasTags />
      <NutraceuticosMetasTags />
      <MarcasMetasTag />
      <RecetasMetasTag />
      <EmpresaMetasTags />
      {/* {isPageProduct && <Generic />} */}
    </>
  );
};

export default HomeOpenGraph;
