import React, {useState} from 'react';
import {Box, Collapsible, Link} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

const TermsConditions = () => {
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
              header={<div className="pv6 hover-c-on-action-secondary">PRIMERO: GENERALIDADES</div>}
              onClick={toggleAccordion(1)}
              isOpen={isOpenQuestion === 1}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Este documento regula los términos y condiciones bajo los cuales Ud. tiene derecho a acceder y usar los servicios del sitio
                Web “La Mesa de Todos”. En este sitio se podrá usar, sin costo, el software y las aplicaciones para equipos móviles que le
                permitan navegar, visitar, comparar y si lo desea, adquirir los bienes o servicios que se exhiben aquí. Le recomendamos que
                lea detenidamente estas Condiciones e imprima o guarde una copia de las mismas en la unidad de disco local para su
                información. Estos Términos y Condiciones serán aplicados y se entenderán incorporados en cada uno de los contratos que
                celebre con Nutrisco S.A. por medio de este sitio web. El uso de este sitio, la aplicación de estos Términos y Condiciones,
                los actos que ejecute y los contratos que celebre por medio de este sitio web, se encuentran sujetos y sometidos a las leyes
                de la República de Chile y en especial a la ley 19.496 de protección de los derechos de los consumidores. Nutrisco S.A., por
                lo tanto, aplicará estrictamente todos los beneficios, garantías y derechos reconocidos en favor de los consumidores en la
                ley 19.496. Además, “Nutrisco S.A.” adhiere en todas sus partes al Código de Buenas Prácticas para el Comercio Electrónico
                de la Cámara de Comercio de Santiago, el cual se encuentra disponible en el siguiente{' '}
                <Link href="https://www.ccs.cl/wp-content/uploads/2020/01/codigo_buenas_practicas.pdf">link</Link>.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SEGUNDO: COMUNICACIONES</div>}
              onClick={toggleAccordion(2)}
              isOpen={isOpenQuestion === 2}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Para la comunicación de cualquier presentación, consulta o reclamo a propósito del uso de este sitio, o los contratos que en
                él se lleven a cabo, Nutrisco S.A. deja establecido que el medio de contacto primario entre el Portal y el Usuario es por
                medio del correo electrónico{' '}
                <Link>
                  contacto<code>@</code>lamesadetodos.cl{' '}
                </Link>
                “La Mesa de Todos” se obliga a que, en caso de enviarle información publicitaria o promocional, por correo electrónico, ésta
                contendrá al menos la siguiente información:
                <ul>
                  <li>
                    a) Identificación del mensaje, que lo haga reconocible como publicidad o comunicación promocional, en el campo de asunto
                    del mensaje.
                  </li>
                  <li>
                    b) Existencia del derecho del consumidor o usuario a solicitar el cese de envíos de publicidad de ese tipo por parte de
                    La Mesa de Todos y la obligación de ésta última de suspender dichos envíos.
                  </li>
                  <li>
                    c) Un procedimiento simple y eficaz para que el consumidor pueda hacer esa solicitud, indicando una dirección
                    electrónica para estos efectos.
                  </li>
                  <li>d) La Identificación del anunciante con su denominación comercial.</li>
                </ul>
                Tratándose de publicidad teaser, se cumplirá con las obligaciones señaladas precedentemente en la medida que se identifique
                la agencia que realiza la misma. “La Mesa de Todos” cesará el envío de los mensajes publicitarios o promocionales por correo
                electrónico u otros medios de comunicación individual equivalentes, a toda persona que hubiere solicitado expresamente la
                suspensión de esos envíos.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={
                <div className="pv6 hover-c-on-action-secondary">LIBERTAD DE NAVEGACIÓN Y ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</div>
              }
              onClick={toggleAccordion(3)}
              isOpen={isOpenQuestion === 3}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                La mera visita de este sitio no impone ningún tipo de obligación para el usuario, a menos que éste exprese de forma
                inequívoca, por medio de actos positivos, su voluntad de contratar con la empresa para adquirir bienes o servicios, en la
                forma indicada en estos términos y condiciones. Para aceptar estos Términos y Condiciones, el usuario deberá hacer click
                donde el sitio web de “La Mesa de Todos” ofrezca esta opción en la interfaz del usuario con la frase “he leído y aceptado” u
                otra equivalente que permita dar su consentimiento inequívoco respecto de la aceptación.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">CUARTO: REGISTRO</div>}
              onClick={toggleAccordion(4)}
              isOpen={isOpenQuestion === 4}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El registro del comprador en el sitio y el uso de contraseña no es requisito obligatorio para contratar, sin embargo,
                facilita el acceso personalizado, confidencial y seguro al sitio. En caso de registrarse en el sitio, el usuario contará con
                una contraseña secreta de la cual podrá disponer e incluso modificar si así lo requiriera el usuario. Para activar la
                contraseña deberá completar el formulario de registro disponible en el sitio y enviarlo a “La Mesa de Todos” haciendo click
                en el campo respectivo. Respecto de la confidencialidad de la contraseña serán responsables el usuario y el administrador
                dentro del ámbito que a cada uno corresponda.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">CÓMO CONTRATAR</div>}
              onClick={toggleAccordion(5)}
              isOpen={isOpenQuestion === 5}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Para hacer compras o contratar servicios en este sitio deberá seguir los siguientes pasos haciendo click en el campo
                correspondiente:
                <ul>
                  <li>
                    1. Para iniciar el proceso de contratación es necesario que confirme haber leído y aceptado estos Términos y
                    Condiciones.
                  </li>
                  <li>2. Seleccione el producto o servicio que le interesa y agréguelo a su “carro de compra”.</li>
                  <li>
                    3. Inicie sesión en el sitio o Ingresa tu correo electrónico y tu contraseña. Y, en caso de no estar registrado y desea
                    hacerlo, utilice el ícono “registra tu contraseña”.
                  </li>
                  <li>
                    4. Seleccione el tipo de despacho y entrega entre las alternativas disponibles en el sitio, en caso de no haber
                    alternativas disponibles siga las instrucciones para la entrega de acuerdo a lo señalado en el sitio.
                  </li>
                  <li>5. Seleccione el medio de pago.</li>
                  <li>
                    6. Una vez hecha la orden, se desplegará en la pantalla: Esta información debe aparecer antes de la selección del medio
                    de pago y es como funciona en la mayoría de los sitios.
                    <div>
                      <ul>
                        <li>a. una descripción del producto o servicio contratado.</li>
                        <li>b. Precio.</li>
                        <li>c. indicación de costo de envío si corresponde.</li>
                        <li>d. fecha de entrega según el tipo de despacho escogido.</li>
                        <li>e. medio de pago.</li>
                        <li>f. valor total de la operación.</li>
                        <li>g. demás condiciones de la orden.</li>
                        <li>h. Posibilidad de imprimir y almacenar la orden.</li>
                        <li>i. también un número único de la orden, con la cual podrá hacer seguimiento en línea de ella.</li>
                      </ul>
                    </div>
                  </li>
                  <li>7. Envío de la información al correo electrónico registrado.</li>
                  <li>
                    8. La orden luego pasará automáticamente a un proceso de confirmación de identidad, resguardándose siempre la seguridad
                    y privacidad del usuario y del proceso de contratación, disponibilidad, vigencia y cupo del medio de pago que se haya
                    seleccionado.
                  </li>
                  <li>
                    9. Cumplido con lo anterior se perfecciona el contrato haciéndose el cargo en el medio de pago seleccionado, se enviará
                    el comprobante de compra con la boleta o factura que corresponda en formato electrónico y será despachado el producto,
                    de acuerdo al modo de entrega que se hubiera seleccionado.
                  </li>
                  <li>
                    10. No se verá afectado el comprador en sus derechos ni tampoco se le efectuarán cargos, sin que sea confirmada su
                    identidad.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SEXTO: MEDIOS DE PAGO</div>}
              onClick={toggleAccordion(6)}
              isOpen={isOpenQuestion === 6}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Salvo que se señale un medio diferente para casos u ofertas específicos, los productos y servicios que se informan en este
                sitio sólo podrán ser pagados por medio de:
                <ul>
                  <li>
                    1. Tarjeta de crédito bancarias Visa, Mastercard, Dinners Club International o American Express, emitidas en Chile o en
                    el extranjero, siempre que mantengan un contacto vigente para este efecto con “La Mesa de Todos”.
                  </li>
                  <li>
                    2. Tarjetas de débito bancarias acogidas al sistema Redcompra, emitidas en Chile por bancos nacionales, que mantengan un
                    contrato vigente para tales efectos con “La Mesa de Todos”.
                  </li>
                </ul>
                El pago con tarjetas de débito se realizará a través de WebPay, que es un sistema de pago electrónico que se encarga de
                hacer el cargo automático a la cuenta bancaria del usuario. Los usuarios declaran que entienden que estos medios de pago o
                portales de pago pertenecen a terceras empresas proveedoras de estos servicios, independientes y no vinculadas a “La Mesa de
                Todos”, por lo que la continuidad de su prestación de servicios en el tiempo, así como el correcto funcionamiento de sus
                herramientas y botones de pago en línea, será de exclusiva responsabilidad de las empresa proveedoras de estos servicios y
                en ningún caso de “La Mesa de Todos”
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SÉPTIMO: DERECHOS Y GARANTÍAS</div>}
              onClick={toggleAccordion(7)}
              isOpen={isOpenQuestion === 7}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <strong>Cambios y devoluciones</strong>
                </div>
                Si el producto comprado no lo satisface este puede ser cambiado o devuelto sin problemas hasta 30 días después de la fecha
                en que este haya sido recibido, en cualquier sucursal de la empresa, o si fue despachado, la empresa puede ir a buscarlo al
                mismo lugar, pagando sólo el valor del transporte que será el mismo valor que el despacho. Para poder hacer cambio o
                devolución es necesario que el producto esté sin uso, con todos sus accesorios, embalajes originales. Además, atendiendo la
                naturaleza de los productos, en las siguientes categorías es necesario que estos no hayan sido abiertos y que conserven su
                sellado y embalaje original. Para cambio o devolución deberá presentarse la boleta, guía de despacho, ticket de cambio, u
                otro comprobante de compra. Esta garantía no aplica a productos a pedido o confeccionados a la medida. En el caso de
                productos que sean informados como usados, abiertos, de segunda selección o con alguna deficiencia, que sean comprados
                habiéndose informado esta situación en el sitio y contando con un precio reducido, no será aplicable el cambio ni
                devolución. En caso de devolución de dinero la empresa realizará un abono en el medio de pago que haya utilizado en un
                período no superior a 10 días hábiles, 240 Horas de haberse aceptado la devolución, cuestión que será informada a través del
                correo electrónico que se hubiere registrado.
                <div>
                  <strong>Derecho de Retracto</strong>
                </div>
                El usuario tendrá un plazo de 10 días para poner término al contrato celebrado por medios electrónicos desde que reciba el
                producto o desde que contrate el servicio, antes que éste sea prestado. Para ejercer este derecho deberá utilizar los mismos
                medios que empleó para celebrar el contrato y siempre que “La Mesa de Todos” le haya enviado comunicación de haberse
                perfeccionado el contrato, copia íntegra, acceso claro, comprensible e inequívoco de las condiciones generales del mismo y
                la posibilidad de almacenarlos o imprimirlos. Si “La Mesa de Todos” no ha dado cumplimiento al envío de la comunicación
                escrita anteriormente mencionada el plazo se extenderá a 90 días. No podrá ejercerse este derecho cuando el bien, materia
                del contrato, se haya deteriorado por hecho imputable al consumidor, por su naturaleza propia o su tiempo de caducidad
                debidamente señalado. Si el bien o servicio se obtuvo por medio de un crédito, éste queda sin efecto pero los intereses son
                de cargo del consumidor cuando se haya otorgado por un tercero. “La Mesa de Todos” tendrá la obligación de devolverle las
                sumas abonadas, sin retención de gastos, y a la mayor brevedad posible y, en cualquier caso, antes de 45 días a la
                comunicación del retracto. Tratándose de servicios, la devolución sólo comprenderá aquellas sumas abonadas que no
                correspondan a servicios ya prestados a la fecha del retracto. Usted deberá restituir en buen estado los elementos de
                embalaje, los manuales de uso, las cajas, elementos de protección y todo otro elemento que viniera con el bien.
                <div>
                  <strong>Garantías Legales</strong>
                </div>
                En caso que el producto no cuente con las características técnicas informadas, si estuviera dañado o incompleto, podrá ser
                cambiado de inmediato. Si presentara fallas o defectos dentro de los 3 meses siguientes a la fecha en que éste fue recibido,
                puede optarse entre su reparación gratuita, o previa restitución, su cambio o la devolución de la cantidad pagada, siempre
                que el producto no se hubiera deteriorado por un hecho imputable al consumidor. Si el producto cuenta con una garantía del
                fabricante, se aplicará el plazo de esta garantía, si este plazo fuera mayor. Sin embargo, si el producto es perecible o
                está naturalmente destinado a ser usado o consumido en un período breve, el plazo de devolución será el impreso en el
                producto o en su envoltorio o, en su defecto, será de 7 días. Todos estos plazos se suspenderán por el tiempo en que el bien
                esté siendo reparado en ejercicio de la garantía, y hasta que se complete la reparación. Se considerará como falla o
                defecto:
                <ul>
                  <li>
                    1. Productos sujetos a normas de seguridad o calidad de cumplimiento obligatorio que no cumplan con las especificaciones
                  </li>
                  <li>
                    2. Si los materiales, partes, piezas, elementos, sustancias o ingredientes que constituyan o integren los productos no
                    correspondan a las especificaciones que ostenten o a las menciones del rotulado.
                  </li>
                  <li>
                    3. Productos que por deficiencias de fabricación, elaboración, materiales, partes, piezas, elementos, sustancias,
                    ingredientes, estructura, calidad o condiciones sanitarias, en su caso, no sea enteramente apto para el uso o consumo al
                    que está destinado o al que el proveedor hubiese señalado en su publicidad.
                  </li>
                  <li>
                    4. Si el proveedor y consumidor hubieren convenido que los productos objeto del contrato deban reunir determinadas
                    especificaciones y esto no ocurra.
                  </li>
                  <li>
                    5. Si después de la primera vez de haberse hecho efectiva la garantía y prestado el servicio técnico correspondiente,
                    subsistieren las deficiencias que hagan al bien inapto para el uso o consumo a que se refiere el numeral 3. Este derecho
                    subsistirá para el evento de presentarse una deficiencia a la que fue objeto del servicio técnico, o volviere a
                    presentarse la misma.
                  </li>
                  <li>
                    6. Si la cosa objeto del contrato tiene efectos o vicios ocultos que imposibiliten el uso a que habitualmente se
                    destine.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">OCTAVO: ENTREGA DE PRODUCTOS</div>}
              onClick={toggleAccordion(8)}
              isOpen={isOpenQuestion === 8}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>
                  <strong>Despacho de Productos</strong>
                </div>
                Las condiciones de despacho y entrega de los productos adquiridos podrán ser escogidas de entre las opciones ofrecidas en el
                sitio.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">NOVENO: RESPONSABILIDAD</div>}
              onClick={toggleAccordion(9)}
              isOpen={isOpenQuestion === 9}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                En ningún caso “La Mesa de Todos” responderá por:
                <ul>
                  <li>
                    1. La utilización indebida que Usuarios o visitantes de El Sitio puedan hacer de los materiales exhibidos, de los
                    derechos de propiedad industrial y de los derechos de propiedad intelectual.
                  </li>
                  <li>
                    2. Daños o eventuales daños y perjuicios que se le puedan causar a los Compradores y/o Usuarios por el funcionamiento de
                    las herramientas de búsqueda y de los errores que se generen por los elementos técnicos de El Sitio o motor de búsqueda.
                  </li>
                  <li>
                    3. Contenidos de las páginas a las que los Compradores o Usuarios puedan acceder con o sin autorización de “La Mesa de
                    Todos”.
                  </li>
                  <li>
                    4. El acceso de menores de edad o personas sin capacidad, bajo los términos de la legislación correspondiente, a los
                    contenidos adherentes a la relación contractual que surja de El Sitio.
                  </li>
                  <li>
                    5. Pérdida, mal uso o uso no autorizado de su código de validación, ya sea por parte del Usuario y/ o comprador
                    Compradores, o de terceros, luego de realizada la compra en la forma expresada en los Términos y Condiciones. Asimismo,
                    las partes reconocen y dejan constancia que la plataforma computacional proporcionada por Nutrisco S.A. no es infalible,
                    y por tanto, durante la vigencia del presente Contrato pueden verificarse circunstancias ajenas a la voluntad de
                    Nutrisco S.A., que impliquen que El Sitio o la plataforma computacional no se encuentren operativos durante un
                    determinado periodo de tiempo.
                  </li>
                  <li>6. Información de “La Mesa de Todos” o sus servicios que se encuentre en sitios distintos a www.lamesadetodos.cl</li>
                </ul>
                En tales casos, “La Mesa de Todos” procurará restablecer El Sitio y el sistema computacional con la mayor celeridad posible,
                sin que por ello pueda imputársele algún tipo de responsabilidad. “La Mesa de Todos” no garantiza la disponibilidad y
                continuidad del funcionamiento de El Sitio y tampoco que en cualquier momento y tiempo, los Usuarios puedan acceder a las
                promociones y Ofertas del El Sitio. “La Mesa de Todos” no se hace responsable por los virus ni otros elementos en los
                documentos electrónicos almacenados en los sistemas informáticos de los Usuarios. “La Mesa de Todos” no responderá de los
                perjuicios ocasionados al Cliente, provenientes del uso inadecuado de las tecnologías puestas a disposición de éste,
                cualquiera sea la forma en la cual se utilicen inadecuadamente estas tecnologías. “La Mesa de Todos” no responderá de los
                daños producidos a El Sitio por el uso indebido y de mala fe de los Usuarios y/o Compradores. No obstante, en el evento de
                realizarse un doble pago por un Usuario o Comprador en El Sitio, “La Mesa de Todos” devolverá la suma del sobrepago, dentro
                de los 3 días siguientes a la recepción del respectivo reclamo escrito del Usuario o Comprador, en el que se anexen los
                originales de los comprobantes del pago adicional a lo adquirido. En Login, registro y comunicación con empresas de medios
                de pago, “La Mesa de Todos” usa certificados digitales de seguridad (SSL), con el fin de encriptar comunicación. Nutrisco
                S.A. no manipula ni almacena datos financieros de sus clientes. En todo caso, la responsabilidad de “La Mesa de Todos” ,
                contractual, extracontractual o legal, con los Usuarios, Compradores o visitantes de El Sitio no excederá del precio
                efectivamente pagado por el Comprador en contraprestación por el producto o servicio, sin perjuicio de lo que determinen los
                Tribunales de Justicia.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO: SEGURIDAD DE DATOS</div>}
              onClick={toggleAccordion(10)}
              isOpen={isOpenQuestion === 10}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <strong>Responsabilidad de los Usuarios respecto de la información registrada en el sitio</strong>
                “La Mesa de Todos” adoptará las medidas necesarias y prudentes para resguardar la seguridad de los datos y clave secreta,
                como sistemas de encriptación de información, certificados de seguridad u otros que la empresa estime pertinente. En caso de
                detectarse cambios en la información que hayas registrado en el sitio, o bien, ante cualquier irregularidad en las
                transacciones relacionadas con su identificación o la del medio de pago, o simplemente como medida de protección a su
                identidad, nuestros ejecutivos podrán contactarlo por vía telefónica o correo electrónico, a fin de corroborar sus datos e
                intentar evitar posibles fraudes. En caso de no poder establecer el contacto en un plazo de 72 hrs, por su propia seguridad,
                su orden de compra efectuada en nuestro sitio no podrá ser confirmada. Le informaremos vía telefónica o por correo
                electrónico que su orden ha quedado sin efecto por no poder confirmar su identidad o el medio de pago ofrecido. Además, los
                comprobantes de las gestiones realizadas para contactarte y poder confirmar la operación, estarán disponibles en nuestras
                oficinas durante 30 días, para que puedas confirmar la orden de compra. Cualquier consulta puede ser efectuada a contacto
                <code>@</code>lamesadetodos.cl Sin embargo, los Usuarios y/o Compradores son exclusivamente responsables por la pérdida, mal
                uso o uso no autorizado del código de validación, ya sea por parte de los mismos o de terceros, luego de realizada la compra
                en la forma expresada en los Términos y Condiciones.
                <strong>Datos personales:</strong>
                Los Usuarios y/o Compradores garantizan que la información que suministran para la celebración del contrato es veraz,
                completa, exacta y actualizada. De conformidad con la Ley 19.628, los datos personales que suministren en el Sitio Web
                pasarán a formar parte de una base de datos de Nutrisco S.A. y serán destinados única y exclusivamente en para ser
                utilizados en los fines que motivaron su entrega y especialmente para la comunicación en general entre la empresa y sus
                clientes, validar los datos de la compra, concretar el despacho y responder sus consultas. Los datos no serán comunicados a
                otras empresas sin la expresa autorización de su titular ni serán transferidos internacionalmente. “La Mesa de Todos” jamás
                solicita datos personales o financieros a través de correo electrónico. “La Mesa de Todos” presume que los datos han sido
                incorporados por su titular o por persona autorizada por éste, así como que son correctos y exactos. Los Usuarios y/o
                Compradores con la aceptación de los presentes Términos y Condiciones manifiestan que los datos de carácter personal que
                aporten a través de los formularios online del Sitio pueden ser utilizados para Ofertas posteriores y distintas a las
                ofrecidas en El Sitio. Sin perjuicio de lo anterior, “La Mesa de Todos” garantiza a los usuarios el libre ejercicio de sus
                derechos de información, modificación, cancelación y bloqueo de sus datos personales establecidos en la Ley 19.628. Por
                consiguiente, los compradores podrán realizar requerimientos que digan relación con dichos derechos, y en un plazo máximo de
                dos días corridos, Nutrisco S.A. deberá dar respuesta e implementar efectivamente esta solicitud.
                <strong>Documentos Electrónicos:</strong>
                El usuario, en su calidad de receptor manual de documentos electrónicos, de conformidad con la Resolución Exenta N° 11 del
                14 de febrero de 2003 del Servicio de Impuestos Internos (que estableció el procedimiento para que contribuyentes
                autorizados para emitir documentos electrónicos puedan también enviarlos por estos medios a receptores manuales), declara y
                acepta lo siguiente: Al aprobar estos términos y condiciones, el usuario autoriza a la empresa Nutrisco Chile S.A., RUT N°
                77.643.296-2, para que el documento tributario correspondiente a esta transacción, le sea entregado solamente por un medio
                electrónico. De igual forma, autoriza que el aviso de publicación del documento tributario sea enviado mediante correo
                electrónico.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={
                <div className="pv6 hover-c-on-action-secondary">DÉCIMO PRIMERO: ALCANCE DE LAS CONDICIONES INFORMADAS EN EL SITIO</div>
              }
              onClick={toggleAccordion(11)}
              isOpen={isOpenQuestion === 11}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                “La Mesa de Todos” no modificará las condiciones bajo las cuales haya contratado con los consumidores en este sitio.
                Mientras aparezcan en este sitio, los precios informados estarán a disposición del usuario, aunque no sean los mismos que se
                ofrezcan en otros canales de venta de Nutrisco S.A., como tiendas físicas, catálogos, televisión, radio, u otros. Con todo,
                los precios son aplicables para la ciudad de entrega o despacho. Si una vez ingresado un producto al carro de compras, es
                cambiada la dirección de entrega o despacho a una ciudad diferente, cambiará el precio total del producto de acuerdo a los
                costos de envío a la nueva ciudad registrada. Cualquier cambio en las informaciones publicadas en este sitio, incluyendo las
                referidas a mercaderías, servicios, precios, existencias y condiciones, promociones y ofertas, tendrá lugar antes de recibir
                una orden de compra y solo se referirá a operaciones futuras, sin afectar, en caso alguno, derechos adquiridos por los
                consumidores. Las promociones que ofrecidas en el sitio no necesariamente serán las mismas que ofrezca por otros canales de
                venta. En las promociones que consistan en la entrega gratuita o rebajada de un producto por la compra de otro, el despacho
                del bien que se entregue gratuitamente o a precio rebajado se hará en el mismo lugar al cual se despacha el producto
                comprado, salvo que el adquirente solicite, al aceptar la oferta, que los productos se remitan a direcciones distintas, en
                cuyo caso deberá pagar el valor del despacho de ambos productos. No se podrá participar en estas promociones sin adquirir
                conjuntamente todos los productos comprendidos en ellas.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO SEGUNDO: PROPIEDAD INTELECTUAL</div>}
              onClick={toggleAccordion(12)}
              isOpen={isOpenQuestion === 12}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Salvo indicación en contrario, todos los contenidos incluidos en este sitio, como textos, material gráfico, logotipos,
                íconos de botones, códigos fuente, imágenes, audio clips, descargas digitales y compilaciones de datos, se entenderán como
                propiedad de Nutrisco S.A. y están protegidos por las leyes chilenas e internacionales sobre propiedad intelectual. Los
                materiales gráficos, logotipos, encabezados de páginas, frases publicitarias, iconos de botones, textos escritos y nombres
                de servicios incluidos en este sitio son marcas comerciales, creaciones o imágenes comerciales de propiedad de Nutrisco S.A.
                en Chile y en otros países. Dichas marcas, creaciones e imágenes comerciales no se pueden usar en relación a ningún producto
                o servicio que pueda causar confusión entre los clientes y en ninguna forma que desprestigie o desacredite a Nutrisco S.A.
                Las demás marcas comerciales que no sean de propiedad de Nutrisco S.A. y que aparezcan en este sitio pertenecen a sus
                respectivos dueños. Así mismo, el nombre del Sitio es una marca registrada en favor de Nutrisco S.A. Todos los derechos no
                expresamente otorgados en estos Términos y Condiciones son reservados por “La Mesa de Todos” o sus cesionarios, proveedores,
                editores, titulares de derechos u otros proveedores de contenidos. Ningún producto, imagen o sonido puede ser reproducidos,
                duplicados, copiados, vendidos, revendidos, visitados o explotados para ningún fin, en todo o en parte, sin el
                consentimiento escrito previo de “La Mesa de Todos”. No se puede enmarcar o utilizar técnicas de enmarcación para encerrar
                alguna marca comercial, logotipo u otra información registrada o patentada (incluyendo imágenes, texto, disposición de
                páginas, o formulario) de Nutrisco S.A., sin nuestro consentimiento escrito previo. Tampoco se puede usar meta etiquetas ni
                ningún otro “texto oculto” que use el nombre o marcas comerciales de Nutrisco S.A., sin autorización escrita previa de esta
                empresa. Se prohíbe hacer un uso indebido de este sitio o de estas marcas, licencias o patentes. Lo anterior, sin perjuicio
                de las excepciones expresamente señaladas en la ley. Nutrisco S.A. respeta la propiedad intelectual de otros. Si cree que su
                trabajo ha sido copiado en forma tal que constituye una violación del derecho de propiedad intelectual, contáctate con
                nosotros a&nbsp;contacto<code>@</code>lamesadetodos.cl
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO TERCERO: LEGISLACIÓN APLICABLE Y COMPETENCIA</div>}
              onClick={toggleAccordion(13)}
              isOpen={isOpenQuestion === 13}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Los presentes términos y condiciones se rigen por las leyes de la República de Chile. Cualquier controversia o conflicto
                derivado de la utilización del sitio web de “La Mesa de Todos” , sus Términos y Condiciones y las Políticas de Privacidad,
                su validez, interpretación, alcance o cumplimiento, será sometida a las leyes aplicables de la República de Chile.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
