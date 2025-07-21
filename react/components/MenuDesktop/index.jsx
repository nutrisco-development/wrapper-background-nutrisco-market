import React, {useEffect, useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import {cyber} from '../../data/menu/cyber';
import {ofertas} from '../../data/menu/ofertas';
import {congelados} from '../../data/menu/congelados';
import {conservas} from '../../data/menu/conservas';
import {abarrotes} from '../../data/menu/abarrotes';
import {lacteos} from '../../data/menu/lacteos';
import {bebestibles} from '../../data/menu/bebestibles';
import {nutraceuticos} from '../../data/menu/nutraceuticos';
import {packs} from '../../data/menu/packs';
import {recetas} from '../../data/menu/recetas';
import {mascotas} from '../../data/menu/mascotas';
import {premium} from '../../data/menu/premium';

import './index.css';

const CSS_HANDLES = [
  'ContainerNew',
  'ListItems',
  'Item',
  'ItemCategoryMain',
  'BoxItemNavbar',
  'NavegationMain',
  'ItemParent',
  'ListChild',
  'ItemChild',
  'ItemCyberHighlight',
  'ItemOffersHighlight',
];

// menú personalizado desktop, el cual contiene los departamentos, categorías y subcategorías.
const MenuDesktop = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return isLoading ? (
    <span
      style={{
        color: '#000',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        margin: '0',
        opacity: '0',
      }}
    >
      loading
    </span>
  ) : (
    <div className={`${handles.ContainerNew}`}>
      <ul className={`${handles.ListItems}`} style={{display: 'flex'}}>
        {/* CYBER */}
        {/* <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain} ${handles.ItemCyberHighlight}`} href={`${cyber.principal.url}`}>
            {cyber.principal.title}
          </a>
        </li> */}
        {/* CYBER */}

        {/* OFERTAS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain} ${handles.ItemOffersHighlight}`} href={`${ofertas.principal.url}`}>
            {ofertas.principal.title}
          </a>
        </li>
        {/* OFERTAS */}

        {/* CONGELADOS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${congelados.principal.url}`}>
            {congelados.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.carnes.url}`}>
                    {congelados.principal.items.carnes.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.carnes).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.frutasVerduras.url}`}>
                    {congelados.principal.items.frutasVerduras.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.frutasVerduras).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.helados.url}`}>
                    {congelados.principal.items.helados.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.helados).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.mariscos.url}`}>
                    {congelados.principal.items.mariscos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.mariscos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.pescados.url}`}>
                    {congelados.principal.items.pescados.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.pescados).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${congelados.principal.items.platosPreparados.url}`}>
                    {congelados.principal.items.platosPreparados.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(congelados.platosPreparados).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* CONGELADOS */}

        {/* CONSERVAS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${conservas.principal.url}`}>
            {conservas.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${conservas.principal.items.pescados.url}`}>
                    {conservas.principal.items.pescados.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(conservas.pescados).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${conservas.principal.items.mariscos.url}`}>
                    {conservas.principal.items.mariscos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(conservas.mariscos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${conservas.principal.items.frutasVerduras.url}`}>
                    {conservas.principal.items.frutasVerduras.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(conservas.frutasVerduras).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${conservas.principal.items.sopas.url}`}>
                    {conservas.principal.items.sopas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(conservas.sopas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${conservas.principal.items.premium.url}`}>
                    {conservas.principal.items.premium.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(conservas.premium).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </li>
        {/* CONSERVAS */}

        {/* ABARROTES */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${abarrotes.principal.url}`}>
            {abarrotes.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.aceitesAlinos.url}`}>
                    {abarrotes.principal.items.aceitesAlinos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.aceitesAlinos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.arrozLegumbres.url}`}>
                    {abarrotes.principal.items.arrozLegumbres.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.arrozLegumbres).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.cafeItaliano.url}`}>
                    {abarrotes.principal.items.cafeItaliano.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.cafeItaliano).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.desayunosDulces.url}`}>
                    {abarrotes.principal.items.desayunosDulces.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.desayunosDulces).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.harinasPremezclas.url}`}>
                    {abarrotes.principal.items.harinasPremezclas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.harinasPremezclas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.pastasSalsas.url}`}>
                    {abarrotes.principal.items.pastasSalsas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.pastasSalsas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.tePremium.url}`}>
                    {abarrotes.principal.items.tePremium.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.tePremium).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${abarrotes.principal.items.snackCoctel.url}`}>
                    {abarrotes.principal.items.snackCoctel.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(abarrotes.snackCoctel).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* ABARROTES */}

        {/* PREMIUM */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${premium.principal.url}`}>
            {premium.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.atun.url}`}>
                    {premium.principal.items.atun.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.atun).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.caballa.url}`}>
                    {premium.principal.items.caballa.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.caballa).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.centolla.url}`}>
                    {premium.principal.items.centolla.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.centolla).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.jurel.url}`}>
                    {premium.principal.items.jurel.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.jurel).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.loco.url}`}>
                    {premium.principal.items.loco.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.loco).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/*
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.machas.url}`}>
                    {premium.principal.items.machas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.machas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                PREMIUM */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${premium.principal.items.salmon.url}`}>
                    {premium.principal.items.salmon.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(premium.salmon).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* PREMIUM  */}

        {/* LÁCTEOS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${lacteos.principal.url}`}>
            {lacteos.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${lacteos.principal.items.fiambreria.url}`}>
                    {lacteos.principal.items.fiambreria.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(lacteos.fiambreria).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${lacteos.principal.items.margarina.url}`}>
                    {lacteos.principal.items.margarina.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(lacteos.margarina).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${lacteos.principal.items.crema.url}`}>
                    {lacteos.principal.items.crema.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(lacteos.crema).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${lacteos.principal.items.leche.url}`}>
                    {lacteos.principal.items.leche.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(lacteos.leche).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${lacteos.principal.items.quesos.url}`}>
                    {lacteos.principal.items.quesos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(lacteos.quesos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* LÁCTEOS */}

        {/* BEBESTIBLES */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${bebestibles.principal.url}`}>
            {bebestibles.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${bebestibles.principal.items.agua.url}`}>
                    {bebestibles.principal.items.agua.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(bebestibles.agua).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${bebestibles.principal.items.batidos.url}`}>
                    {bebestibles.principal.items.batidos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(bebestibles.batidos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                  <a className={`${handles.ItemParent}`} href={`${bebestibles.principal.items.jugos.url}`}>
                    {bebestibles.principal.items.jugos.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(bebestibles.jugos).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <a className={`${handles.ItemParent}`} href={`${bebestibles.principal.items.smoothie.url}`}>
                    {bebestibles.principal.items.smoothie.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(bebestibles.smoothie).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </li>
        {/* BEBESTIBLES */}

        {/* NUTRACÉUTICOS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${nutraceuticos.principal.url}`}>
            {nutraceuticos.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${nutraceuticos.principal.items.capsulas.url}`}>
                    {nutraceuticos.principal.items.capsulas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(nutraceuticos.capsulas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* NUTRACÉUTICOS */}

        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${mascotas.principal.url}`}>
            {mascotas.principal.title}
          </a>
          <div className={`${handles.BoxItemNavbar}`} style={{opacity: '0'}}>
            <div className={`${handles.ContainerNew}`}>
              <ul className={`${handles.NavegationMain}`}>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${mascotas.principal.items.capsulas.url}`}>
                    {mascotas.principal.items.capsulas.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(mascotas.capsulas).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a className={`${handles.ItemParent}`} href={`${mascotas.principal.items.capsulas2.url}`}>
                    {mascotas.principal.items.capsulas2.title}
                  </a>
                  <ul className={`${handles.ListChild}`}>
                    {Object.entries(mascotas.capsulas2).map(([key, value]) => (
                      <li key={key.toString()}>
                        <a className={`${handles.ItemChild}`} href={`${value.url}`}>
                          {value.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* PACKS */}
        {/* <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${packs.principal.url}`}>
            {packs.principal.title}
          </a>
        </li> */}
        {/* PACKS */}

        {/* RECETAS */}
        <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${recetas.principal.url}`}>
            {recetas.principal.title}
          </a>
        </li>
        {/* RECETAS */}

        {/* MARCAS */}
        {/* <li className={`${handles.Item}`}>
          <a className={`${handles.ItemCategoryMain}`} href={`${marcas.principal.url}`}>
            {marcas.principal.title}
          </a>
        </li> */}
        {/* MARCAS */}
      </ul>
    </div>
  );
};

export default MenuDesktop;
