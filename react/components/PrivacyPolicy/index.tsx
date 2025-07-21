import React, {useState} from 'react';
import {Box, Collapsible} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

const PrivacyPolicy = () => {
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
              header={<div className="pv6 hover-c-on-action-secondary">OBJETIVO</div>}
              onClick={toggleAccordion(1)}
              isOpen={isOpenQuestion === 1}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                La iguiente política de privacidad y protección de datos personales, en adelante la “Política”, será aplicable a los
                usuarios, en adelante indistintamente el “Usuario” o los “Usuarios”, según corresponda, que accedan al sitio web
                “www.lamesadetodos.cl”, en adelante el “sitio web”, de Nutrisco S.A., en adelante “Nutrisco” o la “Empresa”. Si usted no
                está de acuerdo con esta Política, deberá abstenerse de acceder al sitio web. El acceso, uso y permanencia en el sitio web
                implica la aceptación de la presente Política. La Política establece las condiciones generales relativas a la protección y
                tratamiento de los datos de carácter personal de los Usuarios que accedan al sitio web y se rige por la legislación que al
                respecto se aplique en la República de Chile. Nutrisco adoptará diversas medidas técnicas a fin de mantener un adecuado
                nivel de seguridad que permita prevenir, en la medida de lo posible, la alteración, pérdida, tratamiento o acceso no
                autorizado a dichos datos. Nutrisco se reserva el derecho de revisar y modificar periódicamente la presente Política,
                produciendo dichas modificaciones efectos legales a contar del día hábil siguiente contado desde la fecha de publicación de
                la modificación en el sitio web.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">FORMULARIOS ONLINE</div>}
              onClick={toggleAccordion(2)}
              isOpen={isOpenQuestion === 2}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Toda la información que facilite el Usuario a Nutrisco, por cualquier medio, deberá ser exacta, verdadera, completa y
                actualizada. A estos efectos, el Usuario garantiza la veracidad de todos aquellos datos personales que comunique a Nutrisco,
                como consecuencia del llenado del formulario de contacto en el sitio web. De igual modo, será responsabilidad del Usuario
                mantener toda la información entregada a Nutrisco permanentemente actualizada para que responda, en cada momento, a su
                situación real. Nutrisco podrá suspender temporalmente el acceso al sitio web o el derecho a usar sus servicios sobre
                Internet, cuando tenga dudas sobre la veracidad, exactitud o actualización de la información proporcionada por un Usuario,
                mientras la información suministrada no haya sido confirmada por el mismo. El Usuario será el único responsable de las
                manifestaciones falsas o inexactas que realice, y de los perjuicios que pudiere causar, a Nutrisco o a terceros, por la
                información inexacta que proporcione. Los Usuarios al proporcionar su e-mail, datos personales e información de contacto en
                formularios del sitio web, estarán dando su consentimiento a Nutrisco y sus empresas relacionadas para tratar sus datos
                personales, con finalidades estadísticas, de entrega de información, beneficios y/o actualizaciones periódicas, y para dar a
                conocer noticias de interés y alertas, mediante los canales definidos en el mismo sitio web. Los referidos datos personales
                podrán en casos concretos ser comunicados a terceros, para cumplir con las finalidades recién mencionadas. El Usuario podrá
                cancelar la suscripción al sitio web, utilizando el enlace incluido en los correos electrónicos enviados por la Empresa.
                Cuando un Usuario del sitio web decide darse de baja, se mantendrá únicamente registro del correo electrónico remitido,
                fecha de la solicitud y razón por la cual lo hace. Nutrisco se reserva el derecho de solicitar información a sus Usuarios, a
                través de encuestas y cuestionarios, en forma aislada o periódica, en forma general o particular. La participación en estas
                preguntas, encuestas y cuestionarios será totalmente voluntaria, por lo que será decisión del Usuario completar y contestar
                las mismas y revelar o no la información que se le solicita. La encuesta se utilizará exclusivamente para mejorar la
                satisfacción de los Usuarios, la conversión y el rendimiento del sitio web. En caso de comunicar los resultados de dicha
                encuesta, se omitirá cualquier señal que permita identificar al Usuario.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">PRINCIPIOS PARA EL TRATAMIENTO DE LOS DATOS PERSONALES</div>}
              onClick={toggleAccordion(3)}
              isOpen={isOpenQuestion === 3}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Para las actividades del sitio web que sean relativas al tratamiento de datos personales, se aplican los siguientes
                principios.
                <ul>
                  <li>
                    <strong>1.- Principio de legalidad, lealtad y transparencia:</strong> Para todo tratamiento de datos personales se
                    requerirá el consentimiento previo del Usuario. Este debe ser solicitado a los Usuarios de forma clara y transparente, e
                    indicando el motivo y el propósito del requerimiento.
                  </li>
                  <li>
                    <strong>2.- Principio de minimización de datos:</strong> Los datos personales solicitados y tratados deben ser
                    únicamente los estrictamente necesarios para el o los fines por el cual son recopilados.
                  </li>
                  <li>
                    <strong>3.- Principio de limitación del plazo de almacenamiento:</strong> Los datos personales serán conservados en la
                    Empresa únicamente durante el tiempo necesario para los fines de su tratamiento y de acuerdo a lo requerido en el
                    consentimiento.
                  </li>
                  <li>
                    <strong>4.- Principio de exactitud y limitación de finalidad:</strong> Los datos personales serán recopilados con fines
                    determinados, explícitos y legítimos, y no serán tratados ulteriormente de manera incompatible con dichos fines. Se
                    adoptarán las medidas razonables para que se supriman o rectifiquen los datos personales que sean inexactos con respecto
                    a los fines para los que se tratan.
                  </li>
                  <li>
                    <strong>5.- Principio de integridad y confidencialidad.</strong> Los datos de carácter personal deben ser tratados con
                    estricta sujeción a la legislación vigente. Nutrisco adoptará diversas medidas técnicas u organizativas a fin de
                    mantener un adecuado nivel de seguridad que permita prevenir, en la medida de lo posible, la alteración, pérdida,
                    tratamiento o acceso no autorizado a dichos datos.
                  </li>
                  <li>
                    <strong>6.- Principio de responsabilidad proactiva:</strong> La Empresa asegura y resguarda el cumplimiento de los
                    principios establecidos en la Política, documentando y evidenciando su aplicación.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">RESPONSABLE DEL TRATAMIENTO DE LOS DATOS PERSONALES</div>}
              onClick={toggleAccordion(4)}
              isOpen={isOpenQuestion === 4}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <div>Nutrisco Chile S.A</div>
                <div>Rol Único Tributario Número 77.643.296-2.</div>
                <div>Domicilio: Panamericana Norte Ruta 5, Km 15 Lt 1, Lt 1 - 1 Fdo La Montaña Colina.</div>
                <div>
                  Casilla de correo electrónico de contacto: contacto<code>@</code>lamesadetodos.cl
                </div>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DERECHOS DE LOS USUARIOS</div>}
              onClick={toggleAccordion(5)}
              isOpen={isOpenQuestion === 5}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                <ul>
                  <li>
                    <strong>Derecho de acceso:</strong> Los Usuarios tienen derecho a conocer si la Empresa trata sus datos personales, qué
                    datos concretos se tratan y el propósito del almacenamiento, entre otros aspectos.
                  </li>
                  <li>
                    <strong>Derecho de revocación:</strong> Los Usuarios tienen derecho a revocar la autorización otorgada para el
                    tratamiento de sus datos personales, aunque sin efecto retroactivo, salvo que existan exigencias o intereses especiales
                    descritos por la ley.
                  </li>
                  <li>
                    {' '}
                    <strong>Derecho de rectificación:</strong> Los Usuarios tienen derecho a solicitar que se modifique su información
                    personal cuando esta sea errónea, inexacta, equívoca o incompleta.
                  </li>
                  <li>
                    {' '}
                    <strong>Derecho de oposición y decisiones individuales automatizadas:</strong> Los Usuarios tienen derecho a oponerse al
                    tratamiento de sus datos personales, y al tratamiento de datos para la toma de decisiones individuales 100%
                    automatizadas.
                  </li>
                  <li>
                    <strong>Derecho a la portabilidad de los datos:</strong> Los Usuarios tienen derecho a recibir los datos personales que
                    le incumban, que hayan facilitado a través del sitio web, en un formato estructurado, de uso común y a transmitirlos a
                    otra organización responsable.
                  </li>
                  <li>
                    <strong>Derecho a la limitación del tratamiento:</strong> Los Usuarios tienen derecho a solicitar la limitación del
                    tratamiento de sus datos personales, cuando consideren que el tratamiento a su juicio no sea adecuado. El Usuario del
                    sitio web que esté interesado en ejercer los derechos reconocidos previamente, lo podrá realizar mediante canales
                    oficiales establecidos por la Empresa, el sitio web o mediante correcto electrónico enviado al responsable del
                    tratamiento de los datos personales. No podrá solicitarse supresión, rectificación, anulación o bloqueo de datos
                    personales en los casos en que la ley mandate el tratamiento de estos o reconozca una obligación superior.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">POLÍTICA DE COOKIES</div>}
              onClick={toggleAccordion(6)}
              isOpen={isOpenQuestion === 6}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El acceso al sitio web puede implicar la utilización de cookies. Dicha tecnología permite a la Empresa recopilar información
                no personal de los Usuarios, para facilitar la navegación y mejorar la experiencia de estos. Se hace presente que esta
                tecnología no es utilizada por Nutrisco para la lectura de otros datos almacenados en el disco duro de los Usuarios que
                accedan al sitio web, ni para la lectura de los archivos cookie creados por otros proveedores de servicios de Internet.
                Cualquier información recopilada a través de cookies, que conjuntamente permita identificar a una persona, se tratará bajo
                los principios establecidos en la presente Política. Es responsabilidad del Usuario consultar las instrucciones de su
                sistema navegador, especialmente en lo relacionado a configuraciones y políticas de privacidad, donde se puede escoger la
                funcionalidad que comunica la existencia de cookies y/o impide la instalación de estas, si es el deseo del Usuario. Sin
                embargo, se debe considerar que sin cookies es posible que el Usuario no pueda tener acceso a determinadas prestaciones del
                sitio web de Nutrisco o no pueda navegar de forma óptima.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">ENLACES A OTROS SITIOS WEB</div>}
              onClick={toggleAccordion(7)}
              isOpen={isOpenQuestion === 7}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                En el sitio web existen enlaces a otros dominios de internet. Dichos dominios externos pertenecen a otros responsables de
                tratamiento de datos, quienes cuentan con su propia política de privacidad y protección de datos personales. Los sitios
                externos son responsables de sus propias prácticas de privacidad.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">ACEPTACIÓN DE LA POLÍTICA</div>}
              onClick={toggleAccordion(8)}
              isOpen={isOpenQuestion === 8}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Es necesario que el Usuario de la página web conozca y esté conforme con lo establecido en la Política, el uso de cookies y
                que acepte el tratamiento de sus datos personales. Al aceptar las condiciones establecidas en los formularios del sitio web,
                el Usuario manifiesta su consentimiento para el tratamiento de sus datos personales, además de estar en conocimiento de la
                presente Política.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
