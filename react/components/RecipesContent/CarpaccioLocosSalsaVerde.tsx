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

const CarpaccioLocosSalsaVerde = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {
      id: 263,
      quantity: 1,
      seller: 1,
    },
    {
      id: 357,
      quantity: 1,
      seller: 1,
    },
    {
      id: 654,
      quantity: 1,
      seller: 1,
    },
    {
      id: 1340,
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
                src="https://orizonb2ccl.vtexassets.com/arquivos/carpacciolocos.png"
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
                      <span>30 Minutos</span>
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
                      <span>6 Porciones</span>
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
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;1 kilo de locos Fisherman al natural.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;1/2 cucharada de sal.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;Jugo de 1 limón.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;1 cucharada de aceite de oliva.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;1 cebolla blanca.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;60 g de cilantro.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;Limón.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;Sal y pimienta</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;2 paltas Maduras.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>10.&nbsp;60 g de cilantro.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;60 g de perejil.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>12.&nbsp;3 unidades de cebollín.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>13.&nbsp;2 limones.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>14.&nbsp;Un huevo duro.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>15.&nbsp;Aceite de oliva.</li>
                  </ul>
                </div>
              </div>
              <h2 className={handles.RecipeFoodSheetTitle}>Preparación</h2>
              <ul className={handles.RecipeFoodInstructionsList}>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    1. En una juguera procesamos todos los ingredientes de la crema de palta, hasta tener una salsa cremosa y consistente.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    2. Probamos, debe estar deliciosa, con un punto de acidez correcto y gracias al huevo duro, se debe crear una emulsión
                    estable y consistente. Hacemos una salsa verde clásica para tener frescura y crocancia. Cortamos chiquitito la cebolla,
                    cilantro, perejil y condimentamos.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>3. Cortamos los locos a lo largo de unos 0,3 mm de espesor, para tener una rica consistencia.</p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    4. En un plato estirado, disponemos nuestra salsa de palta en la base, arriba los locos y agregamos unos toques de
                    aceite de oliva, sal y pimienta.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>5. Terminamos con unas cucharaditas bien distribuidas de la salsa verde y decoramos con hojitas frescas.</p>
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

export default CarpaccioLocosSalsaVerde;
