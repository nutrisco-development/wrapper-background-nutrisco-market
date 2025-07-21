import React from 'react';
import {useCssHandles} from 'vtex.css-handles';
import {useOrderItems} from 'vtex.order-items/OrderItems';
import './index.css';

const CSS_HANDLES = [
  'RecipeFoodDetails',
  'RecipeFoodDetailsIcons',
  'RecipeFoodDetailsList',
  'RecipeFoodDetailsListItem',
  'RecipeFoodDetailsListItemTitle',
  'RecipeFoodSheet',
  'RecipeFoodSheetTitle',
  'RecipeFoodIngredientsList',
  'RecipeFoodIngredientsListItem',
  'RecipeFoodInstructionsList',
  'RecipeFoodInstructionsListItem',
  'RecipeFoodSheetShortTips',
  'RecipeFoodSheetShortDescription',
  'RecipeFoodSheetLinkBox',
  'RecipeFoodSheetLink',
  'RecipeFoodSheetSeparator',
  'RecipeFoodDetailsIconsItem',
  'RecipeFoodDetailsIconsSeparator',
  'RecipeFoodFeaturedList',
  'RecipeFoodFeaturedListItem',
  //
  'RecipeFoodSection',
  'RecipeFoodGrid',
  'RecipeFoodGridItem1',
  'RecipeFoodGridItem2',
  'RecipeFoodGridItem1Box',
  'RecipeFoodGridItem2Box',

  'RecipeFoodGridItem1BoxImage',
  'RecipeFoodGridItem2Divider',
  'RecipeFoodBoxBtn',
  'RecipeFoodBtn',
];

const CevicheLomosJurel = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {id: 1163, quantity: 1, seller: 1},
    {id: 1164, quantity: 1, seller: 1},
    {id: 1165, quantity: 1, seller: 1},
    {id: 386, quantity: 1, seller: 1},
    {id: 236, quantity: 1, seller: 1},
    {id: 238, quantity: 1, seller: 1},
    {id: 663, quantity: 1, seller: 1},
    {id: 928, quantity: 1, seller: 1},
    {id: 929, quantity: 1, seller: 1},
    {id: 930, quantity: 1, seller: 1},
    {id: 388, quantity: 1, seller: 1},
    {id: 641, quantity: 1, seller: 1},
    {id: 77, quantity: 1, seller: 1},
  ];

  return (
    <div>
      <section className={handles.RecipeFoodSection}>
        <div className={handles.RecipeFoodGrid}>
          <div className={handles.RecipeFoodGridItem1}>
            <div className={handles.RecipeFoodGridItem1Box}>
              <img
                alt=""
                src="https://orizonb2ccl.vtexassets.com/arquivos/cover-ceviche-de-lomos-de-jurel.jpg"
                className={handles.RecipeFoodGridItem1BoxImage}
              />
            </div>
          </div>
          <div className={handles.RecipeFoodGridItem2}>
            <div className={handles.RecipeFoodGridItem2Box}>
              <div className={handles.RecipeFoodGridItem2Divider}>
                <div>
                  <h2 className={handles.RecipeFoodSheetTitle}>Detalles</h2>
                  <ul className={handles.RecipeFoodFeaturedList}>
                    <li className={handles.RecipeFoodFeaturedListItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-alarm"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.75"
                        stroke="#4d5858"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="13" r="7"></circle>
                        <polyline points="12 10 12 13 14 13"></polyline>
                        <line x1="7" y1="4" x2="4.25" y2="6"></line>
                        <line x1="17" y1="4" x2="19.75" y2="6"></line>
                      </svg>
                      <span>30 min</span>
                    </li>
                    <li className={handles.RecipeFoodFeaturedListItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.75"
                        stroke="#4d5858"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      <span>(4) Personas</span>
                    </li>
                    <li className={handles.RecipeFoodFeaturedListItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chef-hat"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.75"
                        stroke="#4d5858"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4.002 4.002 0 1 1 2.092 -7.723a3.999 3.999 0 0 1 3.908 -3.151z"></path>
                        <path d="M6.161 17.009l11.839 -.009"></path>
                      </svg>
                      <span>Dificultad: Media</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className={handles.RecipeFoodSheetTitle}>Ingredientes</h2>
                  <ul className={handles.RecipeFoodIngredientsList}>
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;500 grs. de Lomos de Jurel congelado</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;1 cebolla morada grande</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;½ taza de cilantro picado</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;1 ají verde picado en cuadritos pequeños</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;½ pimentón rojo o verde picado en cuadritos</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;2 paltas firmes</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;½ taza de aceite de oliva</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;½ a ¾ taza de Jugo de limón recién exprimido y colado</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;Sal y pimienta</li>
                  </ul>
                </div>
              </div>
              <h2 className={handles.RecipeFoodSheetTitle}>Preparación</h2>
              <ul className={handles.RecipeFoodInstructionsList}>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    1.&nbsp;Descongelar los lomos de jurel y picar en cubos medianos. Condimentar con sal, pimienta y ¼ taza de aceite de
                    oliva. Llevar un sartén grande a fuego fuerte y calentar 2 minutos. Saltear los cubos de jurel hasta que estén cocidos.
                    Traspasar a un bol y dejar enfriar. Una vez fríos, mezclar con el jugo de limón y reservar. Mientras tanto, picar la
                    cebolla en pluma y dejar reposar en agua recién hervida por 5 minutos. Colar, pasar por agua fría y dejar estilar. En un
                    bol mezclar la cebolla con la palta picada en cubos, ají verde, cilantro, pimentón, aceite de oliva restante, sal y
                    pimienta.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>2.&nbsp;Agregar los cubos de jurel con el jugo de limón y mezclar bien. Servir bien frío como aperitivo o entrada.</p>
                </li>
              </ul>

              {/* <h2 className={handles.RecipeFoodSheetTitle}>Tips</h2>
            <div className={handles.RecipeFoodSheetShortTips}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique ea porro qui, suscipit repellat ad reprehenderit provident ex quia quaerat minima ratione? Enim dolor obcaecati a beatae, nihil doloribus
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className={handles.RecipeFoodBoxBtn}>
        <a className={handles.RecipeFoodBtn} onClick={() => addItems(myItem)}>
          agregar productos al carrito
        </a>
      </div>
    </div>
  );
};

export default CevicheLomosJurel;
