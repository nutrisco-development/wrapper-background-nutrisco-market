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

const AlgondigasJurelSalsaTomates = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {
      id: 1181,
      quantity: 1,
      seller: 1,
    },
    {
      id: 386,
      quantity: 1,
      seller: 1,
    },
    {
      id: 443,
      quantity: 1,
      seller: 1,
    },
    {
      id: 866,
      quantity: 1,
      seller: 1,
    },
    {
      id: 77,
      quantity: 1,
      seller: 1,
    },
  ];

  return (
    <div>
      <section className={handles.RecipeFoodSection}>
        <div className={handles.RecipeFoodGrid}>
          <div className={handles.RecipeFoodGridItem1}>
            <div className={handles.RecipeFoodGridItem1Box}>
              <img
                alt=""
                src="https://orizonb2ccl.vtexassets.com/arquivos/cover-algondigas-de-jurel-con-salsa-de-tomates.jpg"
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
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;3 tarros de Jurel en conserva de 425gr</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;1 cebolla picada en cuadritos</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;2 huevos</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;2 cdas. de pan rallado</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;2 cdas. de vino blanco (opcional)</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;4 rebanadas de pan de molde</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;1 taza de leche</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;2 cdas. de harina</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;2 cdas. de perejil fresco picado</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>10.&nbsp;Sal y pimienta</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>
                      11.&nbsp;3 tazas de salsa de tomate preparada (preferentemente casera)
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className={handles.RecipeFoodSheetTitle}>Preparación</h2>
              <ul className={handles.RecipeFoodInstructionsList}>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    1. Limpiar los filetes de jurel, sacando la piel y las espinas, reservar. Remojar el pan en la leche, estrujar bien y
                    reservar. Saltear la cebolla en un sartén con aceite a fuego fuerte hasta que este levemente dorada. En un bol aparte,
                    juntar la cebolla frita con los filetes de caballa desmenuzados, los huevos, el vino blanco, el pan rallado, el pan
                    remojado y estrujado, perejil, sal y pimienta.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    2. Mezclar bien y formar las albóndigas con las manos. Pasarlas por harina, retirar el exceso y luego freírlas en un
                    sartén a fuego fuerte con un poco de aceite, hasta que estén doradas por todos sus lados. Calentar la salsa de tomates
                    en una olla y terminar de cocer las albóndigas dentro de la salsa hirviendo, unos 5 minutos. Apagar el fuego y servir
                    caliente acompañado de Arroz San José o tallarines.
                  </p>
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

export default AlgondigasJurelSalsaTomates;
