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

const TomatesRellenosJurelAhumadoYQuinoa = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {
      id: 77,
      quantity: 1,
      seller: 1,
    },
    {
      id: 1195,
      quantity: 1,
      seller: 1,
    },
    {
      id: 1196,
      quantity: 1,
      seller: 1,
    },
    {
      id: 1563,
      quantity: 1,
      seller: 1,
    },
    {
      id: 1564,
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
                src="https://orizonb2ccl.vtexassets.com/arquivos/tomatesrellenosjurel.png"
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
                      <span>1 Hora</span>
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
                      <span>6 Unidades</span>
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
                      <span>Dificultad: Fácil</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className={handles.RecipeFoodSheetTitle}>Ingredientes</h2>
                  <ul className={handles.RecipeFoodIngredientsList}>
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;Jurel ahumado Fisherman.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;6 tomates frescos redondos medianos.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;200g de quínoa blanca cocida.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;1 cebolla blanca picada finita.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;3 dientes de ajo</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;Orégano fresco.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;1 atado de ciboulette.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;100g de panko</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;Sal y pimienta.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>10.&nbsp;1 pizca de comino.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;1 pizca de azúcar.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;100cc de vinagre tinto.</li>
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
                    1. Con un cuchillo chico, le sacamos los sombreros a los tomates de la parte superior donde está el tallo/pedúnculo. Con
                    una cuchara los ahuecamos y llevamos la pulpa y semillas a un bowl.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    2. Hacemos un sofrito en un sartén de la cebolla y ajo, con el aceite de nuestro jurel que potenciará el sabor. Cuando
                    esté traslucido, agregamos sal, un poco de comino, pimienta y una cucharadita de azúcar.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    3. Agregamos el tomate, vinagre, hojita de laurel y dejamos guisar unos 10 minutos. Retiramos del fuego, mezclamos con
                    quínoa cocida para darle mas consistencia y hacerlo un plato más completo.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>4. Finalmente, el jurel para darle ese sabor inconfundible. Revolvemos, agregamos las hierbas y probamos.</p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>5. Rellenamos los tomates, agregamos pan rallado superficialmente y horneamos durante 40 minutos a 180.</p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>6. Retiramos del horno cuando el tomate esté dorado superficialmente, blandito y algo marchito.</p>
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

export default TomatesRellenosJurelAhumadoYQuinoa;
