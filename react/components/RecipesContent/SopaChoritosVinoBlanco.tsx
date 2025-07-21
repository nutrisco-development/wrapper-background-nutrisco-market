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

const SopaChoritosVinoBlanco = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const {addItems} = useOrderItems();

  const myItem = [
    {
      id: 17,
      quantity: 1,
      seller: 1,
    },
    {
      id: 18,
      quantity: 1,
      seller: 1,
    },
    {
      id: 98,
      quantity: 1,
      seller: 1,
    },
    {
      id: 99,
      quantity: 1,
      seller: 1,
    },
    {
      id: 100,
      quantity: 1,
      seller: 1,
    },
    {
      id: 101,
      quantity: 1,
      seller: 1,
    },
    {
      id: 102,
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
                src="https://orizonb2ccl.vtexassets.com/arquivos/sopadechoritos.jpg"
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
                      {/* <span>1 Hora</span> */}
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
                      {/* <span>6 Unidades</span> */}
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
                      {/* <span>Dificultad: Fácil</span> */}
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className={handles.RecipeFoodSheetTitle}>Ingredientes</h2>
                  <ul className={handles.RecipeFoodIngredientsList}>
                    <li className={handles.RecipeFoodIngredientsListItem}>1.&nbsp;2 tarro choritos en lata.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>2.&nbsp;1 un cebolla.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>3.&nbsp;2 diente(s) ajo.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>4.&nbsp;1 un cebollín.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>5.&nbsp;2 cda(s) aliño completo.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>6.&nbsp;1 taza(s) perejil.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>7.&nbsp;4 taza(s) vinagre blanco.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>8.&nbsp;2 cda(s) mantequilla.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>9.&nbsp;4 cda(s) crema de leche.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>10.&nbsp;4 un papa.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;1 taza(s) aceite.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;0,5 cdta(s) sal.</li>
                    <li className={handles.RecipeFoodIngredientsListItem}>11.&nbsp;0,25 cdta(s) pimienta.</li>
                  </ul>
                </div>
              </div>
              <h2 className={handles.RecipeFoodSheetTitle}>Preparación</h2>
              <ul className={handles.RecipeFoodInstructionsList}>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    1. Lavar los vegetales y cortar en cubitos, la cebolla y el cebollín (parte blanca y verde). Picar el ajo y el perejil
                    finos, todo por separado. Reservar.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>2. Pelar las papas y cortar en bastones, lavar y reposar en agua, luego secar al momento de freír.</p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    3. Calentar en una olla el aceite y freír las papas en 2 tiempos, sumergir en aceite por 5 min, sacar y luego por otros
                    8 min, hasta que estén doradas. Reservar.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    4. En un sartén a fuego medio con mantequilla, saltear la cebolla, ajo y cebollín. Condimentar con sal, pimienta y aliño
                    completo.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>
                    5. Incorporar los choritos San José® con su jugo de conserva, añadir 4 tazas de agua y cocinar a fuego bajo por 10 min.
                  </p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>6. Para terminar, añadir la crema y vino blanco, apagar y servir.</p>
                </li>
                <li className={handles.RecipeFoodInstructionsListItem}>
                  <p>7. Montar en un plato hondo la sopa de choritos y al costado las papitas fritas.</p>
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

export default SopaChoritosVinoBlanco;
