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

const RecetaEstofadoJurelPimentonesAsados = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {id: 1181, quantity: 1, seller: 1},
    {id: 388, quantity: 1, seller: 1},
    {id: 386, quantity: 1, seller: 1},
    {id: 928, quantity: 1, seller: 1},
    {id: 1, quantity: 1, seller: 1},
  ];

  return (
    <div>
      <section className={handles.RecipeFoodSection}>
        <div className={handles.RecipeFoodGrid}>
          <div className={handles.RecipeFoodGridItem1}>
            <div className={handles.RecipeFoodGridItem1Box}>
              <img
                alt="estofado de jurel con pimentones asados"
                src="https://orizonb2ccl.vtexassets.com/arquivos/COVER-ESTOFADO-DE-JUREL-CON-PIMENTONES-ASADOS-2023.jpg"
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
                      <span>35 min</span>
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
                      <span>(6) Personas</span>
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
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;1 tarro Jurel conserva lomitos al natural</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;3 tarros de Jurel de 425grs</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;2 pimentones amarillos</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;2 pimentones verdes</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;2 pimentones rojos</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;1 cebolla picada en pluma</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;3 tazas de tomates en conserva picados</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;2 tazas de caldo de verduras</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;Sal y pimienta</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>10.&nbsp;Media taza de aceite</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;3 tazas de Arroz</li>
                  </ul>
                </div>
              </div>
              <h2 className={handles.RecipeFoodSheetTitle}>Preparación</h2>
              <ul className={handles.RecipeFoodInstructionsList}>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    1.&nbsp;Escurrir los tarros de jurel y limpiar los lomos. En una olla, calentar el aceite a fuego fuerte. Freír la
                    cebolla hasta que esté blanda. Agregar los pimentones picados en tiras y freír 8 minutos más o hasta que estén blandos y
                    ligeramente dorados. Revolver constantemente y luego condimentar con sal y pimienta.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    2.&nbsp;Agregar el tomate en conserva con su jugo y el azúcar. Revolver constantemente y dejar que hierva 8 minutos.
                    Agregar el caldo de verduras y dejar que hierva 8 minutos más.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    3.&nbsp;Agregar los lomos de Jurel limpios y sumergirlos dentro de la salsa, evitando que se rompan. Dejar hervir 2
                    minutos más. Servir caliente con Arroz.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={handles.RecipeFoodBoxBtn}>
        {/* agregar productos al carrito */}
        <a className={handles.RecipeFoodBtn} onClick={() => addItems(myItem)}>
          agregar productos al carrito
        </a>
      </div>
    </div>
  );
};

export default RecetaEstofadoJurelPimentonesAsados;
