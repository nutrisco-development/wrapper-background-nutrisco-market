import React, {useState, useEffect} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import './TemplateRecipeFood.css';
import {recipesData} from './data/recipesData';

const CSS_HANDLES = [
  'grid',
  'grid__item',
  'card',
  'card__img',
  'card__content',
  'card__header',
  'card__text',
  'card__btn',
  'grid__item__link',
  'card__link',
];

const TemplateRecipeFood = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return isLoading ? (
    <section>
      <div className={handles.grid}>
        {Object.entries(recipesData).map(([key, value]) => (
          <a href={value.url} className={handles.grid__item__link} key={key.toString()}>
            <div className={handles.grid__item}>
              <div className={handles.card}>
                <img className={handles.card__img} src={value.image} alt={value.title} />
                <div className={handles.card__content}>
                  <h2 className={handles.card__text}>{value.title}</h2>
                  {/* <p className={handles.card__text}></p> */}
                  <p className={handles.card__header}>{value.brand}</p>
                  <a href={value.url} className={handles.card__link}>
                    ver receta
                  </a>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  ) : null;
};

export default TemplateRecipeFood;
