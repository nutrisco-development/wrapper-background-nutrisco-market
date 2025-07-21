import React, {useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import {Modal, Button, Dropdown} from 'vtex.styleguide';
import {TbMapPin} from 'react-icons/tb';
//import {MdInfoOutline} from 'react-icons/md';
import {countries} from '../../data/countries';
import {useRuntime} from 'vtex.render-runtime';
import {useOrderForm} from 'vtex.store-resources/OrderFormContext';
import {useUpdateSession} from 'vtex.session-client';
import {City} from '../../interfaces/city.interfaces';
import './index.css';

const CSS_HANDLES = ['selectRegion', 'btnSaveAddress'];

const ModalExample = (props: {onClose: () => void; modal: any; onOpen: any}) => {
  const handles = useCssHandles(CSS_HANDLES);
  // const [selectedRegion, setSelectedRegion] = useState(null);
  // const [selectedCommune, setSelectedCommune] = useState(null);
  // const [cities, setCities] = useState([]);
  //const [cities, setCities] = useState<City[] | null>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<string | null>(null);
  const [cities, setCities] = useState<City[] | null>([]);
  const updateSession = useUpdateSession();
  const orderFormContext = useOrderForm();
  const runtimeContext = useRuntime();

  const handleRegionChange = (e: {target: {value: any}}) => {
    const regionName = e.target.value;
    setSelectedRegion(regionName);
    const selectedCountryObj = countries.find((item: {regionId: any}) => item.regionId === regionName);
    setCities(selectedCountryObj ? selectedCountryObj.states : []);
    setSelectedCommune(null);
  };

  const handleCommuneChange = (e: {target: {value: any}}) => {
    const communeName = e.target.value;
    setSelectedCommune(communeName);
  };

  const handleSaveAddress = () => {
    if (selectedRegion && selectedCommune) {
      props.onClose();

      const {orderFormId} = orderFormContext.orderForm;
      // console.log('handleSaveAddress_1', selectedRegion);
      // console.log('handleSaveAddress_2', selectedCommune);

      // updateSession({
      //   variables: {
      //     fields: {country: 'CHL', postalCode: selectedCommune},
      //   },
      // });

      // updateSession({
      //   variables: {
      //     fields: {country: 'CHL', postalCode: selectedCommune},
      //   },
      // });
      console.log('selectedCommune', selectedCommune);
      fetch('/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public: {
            country: {
              value: 'CHL',
            },
            postalCode: {
              value: selectedCommune,
            },
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // Handle response data as needed
        })
        .then(() => {
          window.location.reload();
          // Handle response data as needed
        })
        .catch((error) => {
          console.error('There was a problem with your fetch operation:', error);
          // Handle error
        });

      orderFormContext
        .updateOrderFormShipping({
          variables: {
            orderFormId,
            address: {
              postalCode: selectedCommune,

              country: 'CHL',
            },
          },
        })
        .then(() => {
          const sessionData = {
            public: {
              country: {
                value: 'CHL',
              },
              postalCode: selectedCommune,
            },
          };
          runtimeContext.patchSession(sessionData);
        });

      // console.log('orderFormId_current:', orderFormId);
    }
    // props.onClose();
    // setSelectedRegion(null);
    // setSelectedCommune(null);
    // window.location.reload();
  };

  const css = `
  .styles_modal__gNwvD {
    max-width: 450px;
    position: 'relative',
    }
  `;

  return (
    <>
      {props.modal && (
        <Modal isOpen={props.onOpen} onClose={props.onClose} responsiveFullScreen>
          <div>
            <div>
              <div>
                <div>
                  <h4 className="t-heading-5 fw7 flex items-center mt0 mb0 pt6 pb1">
                    <TbMapPin /> Ingresa tu ubicación
                  </h4>
                </div>
                <div>
                  {/* <p className="t-small mw9 bg-washed-red fw5 pa4 bg-danger--faded"></p> */}
                  <div
                    className="f5 fw3 lh-title mt5 mb5 roboto"
                    style={{
                      backgroundColor: '#ffe6e6',
                      borderRadius: 4,
                      borderWidth: '0px 0px 0px 4px',
                      borderStyle: 'solid',
                      borderColor: '#f63f3f',
                      borderImage: 'initial',
                      boxSizing: 'border-box',
                      padding: '12px 16px',
                    }}
                  >
                    Los productos disponibles para compra están asociados a la comuna de despacho seleccionada.
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={() => console.log('Submitted')}>
                  <div className="mb5">
                    <div className={handles.selectRegion}>
                      <Dropdown
                        placeholder="Selecciona una región"
                        size="regular"
                        value={selectedRegion}
                        options={countries.map((item: {regionId: any; name: any}) => ({value: item.regionId, label: item.name}))}
                        onChange={handleRegionChange}
                      />
                    </div>
                  </div>
                  <div className="mb5">
                    <div className={handles.selectRegion}>
                      <Dropdown
                        placeholder="Selecciona una comuna"
                        size="regular"
                        value={selectedCommune}
                        options={cities.map((item) => ({value: item.postalCode, label: item.name}))}
                        onChange={handleCommuneChange}
                        disabled={!selectedRegion}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <div className="mb0">
                  <div className={handles.btnSaveAddress}>
                    <Button block onClick={handleSaveAddress} disabled={!selectedCommune}>
                      Guardar mi ubicación
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <style>{css}</style>
    </>
  );
};

export default ModalExample;

// disabled={!country && !state}
