import React, {useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import {Input, Button} from 'vtex.styleguide';
import swal from 'sweetalert';
import './index.css';

const CSS_HANDLES = ['formModalInscription', 'btnFormModalInscription', 'inputFormModalInscription'];

const FormDataInscription = (props) => {
  const handles = useCssHandles(CSS_HANDLES);
  const {handleModalInscriptionToggle} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitFormData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/dataentities/FI/search?_fields=email&_where=email=${email}`);
      const responseData = await response.json();

      if (responseData.length !== 0) {
        handleDuplicateEmail();
      }

      if (responseData.length === 0) {
        try {
          const response = await fetch(`/_v/api/oms/user/orders/${email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });

          const data = await response.json();
          const dataFinal = data.list;
          const findInvoice = dataFinal.some((order) => order.status === 'invoiced' && order.hostname === 'orizonb2ccl');

          if (findInvoice === true) {
            handleDuplicateEmail();
          }
          if (findInvoice === false) {
            await submitForm();
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleDuplicateEmail = () => {
    handleModalInscriptionToggle();
    swal({
      title: '¡Muchas Gracias!',
      text: 'Tu email ya existe en lamesadetodos.cl',
      icon: 'warning',
      closeModal: true,
      button: false,
      timer: 3000,
    });
  };

  const submitForm = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({name, email}),
    };
    try {
      const response = await fetch('/api/dataentities/FI/documents', options);
      const data = await response.json();
      handleModalInscriptionToggle();
      showSuccessMessage();
      console.log('Formulario enviado! ✅', data);
    } catch (error) {
      console.log(`Error`);
    }
  };

  const showSuccessMessage = () => {
    const wrapperTagH1 = document.createElement('h1');
    wrapperTagH1.innerHTML =
      '<div class="swal-title" style="border: 2px dashed #000000a6;margin: 0;padding: 5px;text-align: center;margin: 0 auto">PRIMERACOMPRA</div>';
    swal({
      title: 'Queremos regalarte un 10% de descuento exclusivo para ti, con el siguiente cupón👇',
      content: wrapperTagH1,
      icon: 'success',
      closeModal: true,
      button: true,
      timer: 90000,
    });
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        maxWidth: '450px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form style={{width: '100%'}} onSubmit={handleSubmitFormData} className={handles.formModalInscription}>
        <Input
          placeholder="Nombre"
          size="regular"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          required
          maxLength="100"
        />
        <br />
        <Input
          placeholder="Correo Electrónico"
          type="email"
          size="regular"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          required
        />
        <br />
        <Button type="submit" block>
          obtener cupón
        </Button>
      </form>
    </div>
  );
};

export default FormDataInscription;
