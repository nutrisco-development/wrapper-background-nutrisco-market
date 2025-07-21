import React, {useEffect, useState} from 'react';
import {Modal} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import FormDataInscription from './FormDataInscription';
import {ErrorBoundary} from 'react-error-boundary';
import './index.css';

const CSS_HANDLES = ['titleFormModalInscription', 'widgetFormModalInscription', 'widgetTitleFormModalInscription'];

// formulario de inscripción para el envío de cupón por primera compra, el cual es enviado al correo electrónico del cliente mediante un trigger de masterdata.
const FormInscription = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState({isModalOpen: false});

  const handleModalInscriptionToggle = () => {
    setState({isModalOpen: !state.isModalOpen});
  };

  const css1 = `
    .styles_modal__gNwvD {
      max-width: 420px;
      position: relative;
      background-image: url(https://orizonb2ccl.vteximg.com.br/arquivos/header-gray-band.jpg);
      background-size: auto;
    }

    .vtex-modal__close-icon {
      background: #fff;
      padding: 0.5rem;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  `;

  useEffect(() => {
    setLoading(false);
  }, []);

  return !isLoading ? (
    <>
      <ErrorBoundary fallback={<div>¡Lo sentimos, hubo un error!</div>}>
        <div className={handles.widgetFormModalInscription} onClick={handleModalInscriptionToggle}>
          <div className={handles.widgetTitleFormModalInscription}>aquí cupón 1° compra</div>
        </div>

        <Modal
          top
          isOpen={state.isModalOpen}
          onClose={handleModalInscriptionToggle}
          style={{width: '600px', margin: '0 auto', maxWidth: '100%'}}
        >
          <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img
                alt="La Mesa de Todos"
                loading="lazy"
                src="https://orizonb2ccl.vtexassets.com/arquivos/LOGO-LMTD-NEW-BRAND-HEADER.svg"
                width={150}
              />
            </div>
            <div className={handles.titleFormModalInscription}>¡obtén tú cupón por primera compra 🎟️!</div>
            <FormDataInscription handleModalInscriptionToggle={handleModalInscriptionToggle} />
          </div>
          <style>{css1}</style>
        </Modal>
      </ErrorBoundary>
    </>
  ) : null;
};

export default FormInscription;

//
