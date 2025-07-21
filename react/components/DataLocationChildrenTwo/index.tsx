import React, {useEffect, useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import ModalExample from '../ModalExample';
import useModal from '../../hooks/useModal';
import {IconMapPin} from '../Icons';
import useUserLocation from '../../hooks/useUserLocation';
import {getCookie, setCookie} from '../../utils/CookiesUtils';
import './index.css';

const CSS_HANDLES = [
  'locationHeader',
  'locationHeaderBox',
  'locationHeaderIcon',
  'locationHeaderTitle',
  'TooltipLocationBoxMain',
  'TooltipLocation',
  'TooltipLocationBox',
  'TooltipLocationClose',
  'TooltipLocationTitle',
  'TooltipLocationLink',
  'TooltipLocationBtn',
  'TooltipLocationBtnCurrent',
  'TooltipLocationBtnChange',
  'TooltipLocationActive',
  'locationHeaderTitleTwo',
  'locationHeaderTitleCode',
];

const DataLocationChildrenTwo = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const [isLoading, setLoading] = useState(false);
  const {user} = useUserLocation();
  const {isModalOpen, handleCloseModal, handleOpenModal} = useModal();

  useEffect(() => {
    setLoading(true);
    let getCookieModal = getCookie('locationModal');
    if (getCookieModal !== '1') {
      setCookie('locationModal', 1, 7);
      handleOpenModal();
    }
  }, []);

  return (
    <>
      <div className={handles.locationHeader}>
        <div className={handles.locationHeaderBox}>
          <span className={handles.locationHeaderIcon}>
            <IconMapPin />
          </span>
          <div>
            <p className={handles.locationHeaderTitleTwo}>¿Dónde entregar tu compra? </p>
            {isLoading ? (
              <p className={handles.locationHeaderTitle} onClick={handleOpenModal}>
                {user.nameCommuneStore || 'Ingresa tu ubicación'}
              </p>
            ) : (
              <p className={handles.locationHeaderTitle} onClick={handleOpenModal}>
                Cargando...
              </p>
            )}
            <div className={handles.locationHeaderTitleCode}>{user.postalCodeStore}</div>
          </div>
        </div>
      </div>
      <ModalExample modal={isModalOpen} onOpen={handleOpenModal} onClose={handleCloseModal} />
    </>
  );
};

export default DataLocationChildrenTwo;

// let getCookieLMDT1 = getCookie('locationStoreLMDT');
// let getLocationOpenModal = getCookie('locationOpenModal');

// if ((getCookieLMDT1 === undefined || getCookieLMDT1 === null || getCookieLMDT1 === '') && getLocationOpenModal !== '1') {
//   setCookie('locationOpenModal', 1, 355);
//   handleOpenModal();
// }
