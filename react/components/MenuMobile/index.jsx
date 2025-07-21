import React, {useEffect, useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import {Ofertas} from './Ofertas';
//import {Cyber} from './Cyber';
import {Congelados} from './Congelados';
import {Conservas} from './Conservas';
import {Abarrotes} from './Abarrotes';
import {Premium} from './Premium';
import {Lacteos} from './Lacteos';
import {Bebestibles} from './Bebestibles';
import {Nutraceuticos} from './Nutraceuticos';
import {Mascotas} from './Mascotas';
import {Login} from './Login';

import './index.css';

const CSS_HANDLES = [
  'menuMobileListMain',
  'menuMobileItemMain',
  'menuMobileItemLink',
  'menuMobileWrapperSubMenu',
  'menuMobileActiveSubMenu',
  'menuMobileItemMainCyber',
  'menuMobileItemMainOffers',
  'menuMobileListMainNew',
  'menuMobileListItemsMainNew',
  'menuMobileItemMainNew',
  'menuMobileListSubMenuNew',
  'menuMobileListSubMenuItemsNew',
  'menuMobileTitleSubMenuNew',
  'menuMobileItemSubMenuNew',
  'menuMobileListTitleMainNew',
  'menuMobileListTitleSummaryMainNew',
  'menuMobileItemOffersMainNew',
  'menuMobileItemOffersLinkMainNew',
  'menuMobileItemCyberMainNew',
];

const MenuMobile = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    isLoading && (
      <div style={{width: '100%'}}>
        <div className="wrapper-sidebar">
          <nav className="">
            <ul className={handles.menuMobileListMainNew}>
              {/* <Cyber handles={handles} /> */}
              <Ofertas handles={handles} />
              <Congelados handles={handles} />
              <Conservas handles={handles} />
              <Abarrotes handles={handles} />
              <Premium handles={handles} />
              <Lacteos handles={handles} />
              <Bebestibles handles={handles} />
              <Nutraceuticos handles={handles} />
              <Mascotas handles={handles} />
              <Login handles={handles} />
            </ul>
          </nav>
        </div>
      </div>
    )
  );
};

export default MenuMobile;
