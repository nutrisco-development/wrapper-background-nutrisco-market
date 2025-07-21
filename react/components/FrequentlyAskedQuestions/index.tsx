import React, {useState} from 'react';
import {Box} from 'vtex.styleguide';
import {Collapsible} from 'vtex.styleguide';
import {Link} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

// página personalizda de preguntas frecuentes
const FrequentlyAskedQuestions = () => {
  const [isOpenQuestion, setOpenQuestion] = useState<number | null>(null);

  const handles = useCssHandles(CSS_HANDLES);

  function toggleAccordion(questionNbr: number) {
    return (_e: any) => setOpenQuestion(isOpenQuestion !== questionNbr ? questionNbr : null);
  }

  return (
    <div>
      <div className="">
        <div className="w-100">
          <Box>
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">CÓMO COMPRAR</div>}
              onClick={toggleAccordion(1)}
              isOpen={isOpenQuestion === 1}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>¿Cómo crear una cuenta?</strong>
                  </div>
                  <div>
                    Comprar es muy fácil si ya eres parte de La Mesa de Todos, si no debes crear tu cuenta. Debes ingresar en nuestra página
                    web, sección micuenta, en donde tendrás 3 opciones de ingreso, a través de google, Facebook o correo electrónico, este
                    último si eres nuevo debes seleccionar recibir código de acceso por mail para luego poder logearte en cuenta,
                    autentificación para usar el paso entrar con e-mail y contraseña
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>¿Cómo hacer un pedido?</strong>
                  </div>
                  <div>
                    Para hacer compras en este sitio deberá seguir los siguientes pasos haciendo clics en el campo correspondiente:
                    <ul>
                      <li>
                        1.Para iniciar el proceso de contratación es necesario que confirme haber leído y aceptado estos Términos y
                        Condiciones.
                      </li>
                      <li>2.Seleccione el producto o servicio que le interesa y agréguelo a su “carro de compra”. </li>
                      <li>
                        3.Inicie sesión en el sitio o Ingresa tu correo electrónico y tu contraseña. Y, en caso de no estar registrado desea
                        hacerlo, utilice el ícono “registra tu contraseña”.
                      </li>
                      <li>
                        4.Seleccione el tipo de despacho y entrega entre las alternativas disponibles en el sitio, en caso de no haber
                        alternativas disponibles siga las instrucciones para la entrega de acuerdo a lo señalado en el sitio.
                      </li>
                      <li>5.Seleccione el medio de pago.</li>
                      <li>
                        6.Una vez hecha la orden, se desplegará en la pantalla: Esta información debe aparecer antes de la selección del
                        medio de pago y es como funciona en la mayoría de los sitios.
                        <ul>
                          <li>A.Una descripción del producto o servicio contratado.</li>
                          <li>B.Precio.</li>
                          <li>C.Indicación de costo de envío si corresponde.</li>
                          <li>
                            D.Fecha de entrega según el tipo de despacho escogido. E. medio de pago. F. valor total de la operación. G.
                            demás condiciones de la orden. H. Posibilidad de imprimir y almacenar la orden. I. también un número único de la
                            orden, con la cual podrá hacer seguimiento en línea de ella.
                          </li>
                        </ul>
                      </li>
                      <li>7.Envío de la información al correo electrónico registrado.</li>
                      <li>
                        8.La orden luego pasará automáticamente a un proceso de confirmación de identidad, resguardándose siempre la
                        seguridad y privacidad del usuario y del proceso de contratación, disponibilidad, vigencia y cupo del medio de pago
                        que se haya seleccionado.
                      </li>
                      <li>
                        9.Cumplido con lo anterior se perfecciona el contrato haciéndose el cargo en el medio de pago seleccionado, se
                        enviará el comprobante de compra con la boleta o factura que corresponda en formato electrónico y será despachado el
                        producto, de acuerdo al modo de entrega que se hubiera seleccionado.
                      </li>
                      <li>
                        10.No se verá afectado el comprador en sus derechos ni tampoco se le efectuarán cargos, sin que sea confirmada su
                        identidad
                      </li>
                    </ul>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Políticas de seguridad</strong>
                  </div>
                  <Link href="https://www.lamesadetodos.cl/empresa/politicas-de-privacidad">
                    https://www.lamesadetodos.cl/empresa/politicas-de-privacidad
                  </Link>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">MEDIOS DE PAGO</div>}
              onClick={toggleAccordion(2)}
              isOpen={isOpenQuestion === 2}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>Medios de pago disponibles</strong>
                  </div>
                  <div>
                    Medios de pago disponibles "El pago se puede realizar con tarjetas de débito y crédito, plataforma Transbank, sólo
                    acepta tarjetas de débito y crédito nacional. No acepta tarjetas internacionales"
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Cupones</strong>
                  </div>
                  <div>
                    Si cuentas con cupón o giftcard puedes ocuparlos una vez elegidos tus productos. El cupón se agrega en el paso 1 carrito
                    de compra y las giftcard en el paso 4 como forma de pago
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DESPACHOS</div>}
              onClick={toggleAccordion(3)}
              isOpen={isOpenQuestion === 3}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>¿Está mi domicilio dentro de la zona de despacho?</strong>
                    <div>
                      Puedes revisar nuestras zonas de despacho en políticas de envío
                      https://www.lamesadetodos.cl/empresa/politicas-de-envio
                    </div>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Zona de Coberturas y Costo del Despacho</strong>
                    <div>
                      Costo de despacho desde $2.990 dependiendo de la zona geográfica, con un mínimo de compra de $15.000 y despacho gratis
                      en compras sobre $30.000 (Regiones Metropolitana, Biobío, Valparaíso y Libertador general Bernardo O’Higgins)
                    </div>
                  </div>
                  <div></div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Plazos de entrega</strong>
                    <div>
                      Los Despachos son a 24 horas en RM, si el pedido se ingresa hasta las 17.00 horas. De todas formas, indicamos que una
                      vez que se proceda efectuar la compra, el sistema te mostrará los días de despacho disponibles.
                    </div>
                  </div>
                  <div></div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Horarios de entrega</strong>
                    <div>
                      Los despachos se realizan de lunes a viernes, entre las 8:30 y las 18:30 hrs, y los días sábados en RM entre 8:30 y 14
                      hrs, exceptuando días festivos
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">PROBLEMAS CON EL PEDIDO</div>}
              onClick={toggleAccordion(4)}
              isOpen={isOpenQuestion === 4}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong> ¿Cómo ingresar una solicitud? </strong>
                    <div>
                      Contactarse con nuestros canales atención, número telefónico: +56224764100, Wsp: +1 (831) 531-6752 o correo
                      electrónico: contacto@lamesadetodos.cl
                    </div>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Oferta no aplicada</strong>
                    <div>
                      Si al momento de hacer su compra se percata que la oferta no fue aplicada por favor contactarse con nuestros canales
                      atención, número telefónico: +56224764100, Wsp: +1 (831) 531-6752 o correo electrónico: contacto@lamesadetodos.cl
                    </div>
                  </div>
                  <div></div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>¿Qué hago si mi pedido viene en mal estado, incompleto o no erá lo que yo solicite?</strong>
                    <div>
                      Si al momento de la entrega te percatas que el empaque está en mal estado, puedes dar conocimiento de esto al instante
                      al transportista. Si tu producto ya fue entregado y se encuentra en mal estado o no es lo que compraste, debes
                      contactarte inmediatamente con servicio de atención al cliente número telefónico: +56224764100, Wsp: +1 (831) 531-6752
                      o correo electrónico: contacto@lamesadetodos.cl
                    </div>
                  </div>
                  <div></div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Me equivoque y compré el producot erroneo ¿Qué hago?</strong>
                    <div>
                      Lamentablemente no es posible realizar un cambio de producto que fue comprado por error. Son productos de consumo
                      inmediato, están limitados a un control de stock, lo que nos impide cambiarlos por otro del mismo valor o similar.
                    </div>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Modificación de pedido</strong>
                    <div>
                      Contactarse con nuestros canales atención,
                      <ul>
                        <li>Número Telefónico: +56 2247-64100</li>
                        <li>WhatsApp: +1 (831) 531-6752 </li>
                        <li>Correo Electrónico: contacto@lamesadetodos.cl</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">PROMOCIONES</div>}
              onClick={toggleAccordion(5)}
              isOpen={isOpenQuestion === 5}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>Vigencia de Promociones</strong>
                    <div>
                      Todas las ofertas que se envían por correo o se encuentran publicadas en redes sociales llevan la vigencia de la
                      promoción en los textos legales (fecha y/o hasta agotar stock)
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">CAMBIO Y DEVOLUCIÓN</div>}
              onClick={toggleAccordion(6)}
              isOpen={isOpenQuestion === 6}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>Derecho de Retracto</strong>
                    <div>
                      El usuario tendrá un plazo de 10 días para poner término al contrato celebrado por medios electrónicos desde que
                      reciba el producto o desde que contrate el servicio, antes que éste sea prestado. Para ejercer este derecho deberá
                      utilizar los mismos medios que empleó para celebrar el contrato y siempre que “La Mesa de Todos” le haya enviado
                      comunicación de haberse perfeccionado el contrato, copia íntegra, acceso claro, comprensible e inequívoco de las
                      condiciones generales del mismo y la posibilidad de almacenarlos o imprimirlos. Si “La Mesa de Todos” no ha dado
                      cumplimiento al envío de la comunicación escrita anteriormente mencionada el plazo se extenderá a 90 días. No podrá
                      ejercerse este derecho cuando el bien, materia del contrato, se haya deteriorado por hecho imputable al consumidor,
                      por su naturaleza propia o su tiempo de caducidad debidamente señalado. Si el bien o servicio se obtuvo por medio de
                      un crédito, éste queda sin efecto, pero los intereses son de cargo del consumidor cuando se haya otorgado por un
                      tercero. “La Mesa de Todos” tendrá la obligación de devolverle las sumas abonadas, sin retención de gastos, y a la
                      mayor brevedad posible y, en cualquier caso, antes de 45 días a la comunicación del retracto. Tratándose de servicios,
                      la devolución sólo comprenderá aquellas sumas abonadas que no correspondan a servicios ya prestados a la fecha del
                      retracto. Usted deberá restituir en buen estado los elementos de embalaje, los manuales de uso, las cajas, elementos
                      de protección y todo otro elemento que viniera con el bien.
                    </div>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Garantías Legales</strong>
                    <div>
                      En caso que el producto no cuente con las características técnicas informadas, si estuviera dañado o incompleto, podrá
                      ser cambiado de inmediato. Si presentara fallas o defectos dentro de los 3 meses siguientes a la fecha en que éste fue
                      recibido, puede optarse entre su reparación gratuita, o previa restitución, su cambio o la devolución de la cantidad
                      pagada, siempre que el producto no se hubiera deteriorado por un hecho imputable al consumidor. Si el producto cuenta
                      con una garantía del fabricante, se aplicará el plazo de esta garantía, si este plazo fuera mayor. Sin embargo, si el
                      producto es perecible o está naturalmente destinado a ser usado o consumido en un período breve, el plazo de
                      devolución será el impreso en el producto o en su envoltorio o, en su defecto, será de 7 días. Todos estos plazos se
                      suspenderán por el tiempo en que el bien esté siendo reparado en ejercicio de la garantía, y hasta que se complete la
                      reparación. Se considerará como falla o defecto:
                      <ul>
                        <li>
                          1.Productos sujetos a normas de seguridad o calidad de cumplimiento obligatorio que no cumplan con las
                          especificaciones
                        </li>
                        <li>
                          2.Si los materiales, partes, piezas, elementos, sustancias o ingredientes que constituyan o integren los productos
                          no correspondan a las especificaciones que ostenten o a las menciones del rotulado.
                        </li>
                        <li>
                          3.Productos que, por deficiencias de fabricación, elaboración, materiales, partes, piezas, elementos, sustancias,
                          ingredientes, estructura, calidad o condiciones sanitarias, en su caso, no sea enteramente apto para el uso o
                          consumo al que está destinado o al que el proveedor hubiese señalado en su publicidad.
                        </li>
                        <li>
                          4.Si el proveedor y consumidor hubieren convenido que los productos objeto del contrato deban reunir determinadas
                          especificaciones y esto no ocurra.
                        </li>
                        <li>
                          5.Si después de la primera vez de haberse hecho efectiva la garantía y prestado el servicio técnico
                          correspondiente, subsistieren las deficiencias que hagan al bien inapto para el uso o consumo a que se refiere el
                          numeral 3. Este derecho subsistirá para el evento de presentarse una deficiencia a la que fue objeto del servicio
                          técnico, o volviere a presentarse la misma.
                        </li>
                        <li>
                          6.Si la cosa objeto del contrato tiene efectos o vicios ocultos que imposibiliten el uso a que habitualmente se
                          destine.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="ma0 bb bb-0 b--black-10" />
                  <div>
                    <strong>Proceso de Devolución</strong>
                    <div>
                      Son entre 10 y 20 días hábiles para realizar la transferencia a la cuenta de banco que sea proporcionada por el
                      cliente
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DESCARGA DE BOLETA O DOCUMENTOS</div>}
              onClick={toggleAccordion(7)}
              isOpen={isOpenQuestion === 7}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>Descarga de Boletas o documentos</strong>
                  </div>
                  <div>
                    Para ver la boleta de tu compra, debes ingresar a tu cuenta, luego ir a pedidos, seleccionar el pedido que deseas
                    visualizar y pinchar "ver detalle del pedido", luego en contraras toda la informacion y aparecerá la palabra "ver
                    factura", la seleccionas y desplegará la boleta en pdf.
                  </div>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SERVICIO AL CLIENTE</div>}
              onClick={toggleAccordion(8)}
              isOpen={isOpenQuestion === 8}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <div>
                    <strong>Contáctenos</strong>
                  </div>
                  <div>Puedes contactarnos al:</div>
                  <ul>
                    <li>Número Telefónico: +56 2247-64100</li>
                    <li>WhatsApp: +1 (831) 531-6752 </li>
                    <li>Correo Electrónico: contacto@lamesadetodos.cl</li>
                  </ul>
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
