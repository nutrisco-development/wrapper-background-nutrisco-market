import React, {useEffect, useState} from 'react';
import {Modal} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import ContactForm from '../../ContactForm';
import './index.css';

import ProfileLogoSVG from './../../data/icons/widget-custom-profile-new-2022.svg';
import PhoneLogoSVG from './../../data/icons/widget-custom-phone-new-2022.svg';
import MailLogoSVG from './../../data/icons/widget-custom-mail-new-2022.svg';
import WhatsAppLogoSVG from './../../data/icons/widget-custom-wp-new-2022.svg';

const CSS_HANDLES = [
  'circleCustomerService',
  'wrapCircleCustomerService',
  'imageCircleCustomerService',
  'itemChannelCircle',
  'itemChannelMail',
  'itemChannelPhone',
  'itemChannelWhatsApp',
  'itemChannelCircleLink',
  'itemChannelCircleShow',
  'itemChannelPhoneText',
  'itemChannelPhoneTextLink',
  'itemChannelPhoneTextShow',
];
// widget personalizado de atención al cliente, dentro de su contenido tiene: formulario de contacto, teléfono y WhatsApp.
const CustomerSupport = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(false);

  const [state, setState] = useState({isModalOpen: false});

  const handleModalToggle = () => {
    setState({isModalOpen: !state.isModalOpen});
  };

  const css = `
  .styles_modal__gNwvD {
    max-width: 450px;
    position: 'relative',
    }
  `;

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleClick = () => {
    const itemChannelSet = document.querySelectorAll('.js-option-customer-service');
    itemChannelSet.forEach((element) => {
      element.classList.toggle(`${handles.itemChannelCircleShow}`);
    });
  };

  const handleClickPhoneText = () => {
    const phoneText = document.querySelector('.js-option-customer-service-phone');
    phoneText.classList.toggle(`${handles.itemChannelPhoneTextShow}`);
  };

  return isLoading ? (
    <>
      <div className={`${handles.circleCustomerService}`} onClick={handleClick}>
        <div className={`${handles.wrapCircleCustomerService}`}>
          <img
            src={ProfileLogoSVG}
            alt="customer service profile"
            className={`${handles.imageCircleCustomerService}`}
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className={`${handles.itemChannelCircle}  ${handles.itemChannelMail} js-option-customer-service`}>
        <a className={`${handles.itemChannelCircleLink}`} onClick={handleModalToggle}>
          <img src={MailLogoSVG} alt="customer service message" width={60} height={60} />
        </a>
      </div>
      <div className={`${handles.itemChannelCircle}  ${handles.itemChannelPhone} js-option-customer-service`}>
        <span className={`${handles.itemChannelPhoneText} js-option-customer-service-phone`}>
          <a href="tel:6005001010" className={`${handles.itemChannelPhoneTextLink}`}>
            600 500 1010
          </a>
        </span>
        <a className={`${handles.itemChannelCircleLink}`} onClick={handleClickPhoneText}>
          <img src={PhoneLogoSVG} alt="customer service phone" width={60} height={60} />
        </a>
      </div>
      <div className={`${handles.itemChannelCircle}  ${handles.itemChannelWhatsApp} js-option-customer-service`}>
        <a href="https://api.whatsapp.com/send?phone=56985890748" target="_blank" className={`${handles.itemChannelCircleLink}`}>
          <img src={WhatsAppLogoSVG} alt="customer service whatsapp" width={60} height={60} />
        </a>
      </div>
      <Modal
        centered
        isOpen={state.isModalOpen}
        onClose={handleModalToggle}
        style={{width: '600px', margin: '0 auto', maxWidth: '100%'}}
        className="hello"
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderRadius: '0.5rem'}}>
          <img
            alt="La Mesa de Todos"
            loading="lazy"
            src="https://orizonb2ccl.vteximg.com.br/arquivos/LOGO-LMTD-NEW-BRAND-FOOTER-2.svg"
            width={140}
            height={70}
          />
        </div>
        <ContactForm handleModalToggle={handleModalToggle} />
      </Modal>
      <style>{css}</style>
    </>
  ) : null;
};

export default CustomerSupport;
