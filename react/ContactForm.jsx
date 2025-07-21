import React, {useState, useEffect} from 'react';
import {Input, Dropdown, Textarea, Button} from 'vtex.styleguide';
import swal from 'sweetalert';
import {ErrorBoundary} from 'react-error-boundary';

const ContactForm = (props) => {
  const {handleModalToggle} = props;
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const options = [
    {value: '1', label: '¿En qué estado está mi pedido?'},
    {value: '2', label: 'Tengo problemas para pagar'},
    {value: '3', label: 'Tengo problemas con mi pedido'},
    {value: '4', label: 'Reclamo o sugerencia'},
    {value: '5', label: 'Otra consulta'},
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reasonLabel = options.find((obj) => {
      return obj.value === reason;
    });

    if (reasonLabel.label !== '') {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({full_name: name, email, reason: reasonLabel.label, order_id: number, message}),
      };
      try {
        const response = await fetch('/api/dataentities/FC/documents', options);
        if (response.ok) {
          const data = await response.json();
          handleModalToggle();
          swal({
            title: '¡Gracias por contactarnos!',
            text: 'Su mensaje se ha enviado con éxito.',
            icon: 'success',
            closeModal: true,
            button: false,
            timer: 2000,
          });
          console.log('Formulario enviado! ✅', data);
        } else {
          setError('Hubo un error al realizar la solicitud');
        }
      } catch (error) {
        setError('Hubo un error al realizar la solicitud', error.message);
      }
    }
  };

  return (
    <>
      <ErrorBoundary fallback={<div>¡Lo sentimos, hubo un error!</div>}>
        {/* {isLoading && <span>Cargando...</span>} */}
        {!isLoading && (
          <div
            style={{
              width: '100%',
              margin: '0 auto',
              maxWidth: '600px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {error && <h6>{error}</h6>}
            <form style={{width: '100%'}} onSubmit={handleSubmit}>
              <Input
                placeholder="Nombre"
                size="large"
                type="text"
                name="full_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength="50"
              />
              <br />
              <Input
                placeholder="Correo Electrónico"
                type="email"
                size="large"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <Dropdown
                placeholder="Motivo/Consulta"
                size="large"
                name="reason"
                options={options}
                value={reason}
                onChange={(_, v) => setReason(v)}
                required
              />
              <br />
              {reason === '1' || reason === '3' ? (
                <>
                  <Input
                    placeholder="Número de Pedido"
                    size="large"
                    type="number"
                    name="order_id"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    maxLength="20"
                  />
                  <br />
                </>
              ) : (
                ''
              )}
              <Textarea
                placeholder="Mensaje"
                size="large"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength="750"
              />
              <br />
              <Button type="submit" block>
                ENVIAR
              </Button>
            </form>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
};

export default ContactForm;
