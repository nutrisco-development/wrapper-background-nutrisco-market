import React, {useState} from 'react';
import {Box} from 'vtex.styleguide';
import {Collapsible} from 'vtex.styleguide';
import {Link} from 'vtex.styleguide';
import {useCssHandles} from 'vtex.css-handles';
import './index.css';

const CSS_HANDLES = ['CollapsibleTextParagraph'];

const TermsConditions = () => {
  const [isOpenQuestion, setOpenQuestion] = useState(null);

  const handles = useCssHandles(CSS_HANDLES);

  function toggleAccordion(questionNbr: number) {
    return (e: any) => setOpenQuestion(isOpenQuestion !== questionNbr ? questionNbr : null);
  }

  return (
    <div>
      <div className="">
        <div className="w-100">
          <Box>
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">PRIMERO: DE LAS PERSONAS QUE PUEDEN PARTICIPAR EN El CONCURSO</div>}
              onClick={toggleAccordion(1)}
              isOpen={isOpenQuestion === 1}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Pueden participar en esta campaña todas las personas naturales chilenas o extranjeras, mayores de 18 años, domiciliadas en
                el territorio nacional de la República de Chile, que cuenten con de cédula de identidad vigente, que cumplan las siguientes
                condiciones.
                <ul>
                  <li>1.- Que tengan una cuenta en la red social “Instagram”.</li>
                  <li>
                    2.- Que dichas cuentas estén registradas como seguidores de la cuenta oficial de @lamesadetodos.cl en la red social
                    “Instagram”, y que cumplan con las demás condiciones establecidas en este documento.
                  </li>
                  <li>3.- Serán nulas las participaciones que se encuentren con datos falsificados o incompletos.</li>
                  <li>
                    4.- No podrán participar en el concurso los colaboradores o trabajadores de Orizon S.A. o empresas externas que
                    colaboren en el desarrollo de la promoción.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SEGUNDO: MECÁNICA DEL CONCURSO</div>}
              onClick={toggleAccordion(2)}
              isOpen={isOpenQuestion === 2}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Para participar en el Concurso, los participantes deben:
                <ul>
                  <li>1.- Seguir a @lamesadetodos.cl en Instagram.</li>
                  <li>2.- Publicar en el post del Concurso una típica frase que decían en su niñez.</li>
                  <li>
                    3. Etiquetar a dos amigos registrados en la red social “Instagram”. No dará derecho a participar a aquellos seguidores
                    que realicen cualquier otra acción en Instagram, que sea incompatible con el concurso vigente.
                  </li>
                </ul>
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">TERCERO: VIGENCIA DE LA PROMOCIÓN</div>}
              onClick={toggleAccordion(3)}
              isOpen={isOpenQuestion === 3}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El presente Concurso estará vigente desde el viernes 29 de julio hasta las 10:00 horas del día viernes 5 de agosto.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">CUARTO: PREMIOS</div>}
              onClick={toggleAccordion(4)}
              isOpen={isOpenQuestion === 4}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Se realizará un sorteo entre todos aquellos que cumplan las condiciones y términos establecidos en el presente instrumento,
                donde se sorteará dos suscripciones Estándar de 6 meses a Netflix más un pack de productos La Mesa de Todos (ambos en
                adelante el “Premio”), para cada ganador. El Premio no será canjeable por dinero en efectivo y no es transferible. Tampoco
                podrá canjearse por otros productos. La Suscripción Estándar de Netflix tiene un valor mensual de $8.320, el valor total por
                seis meses es $49.920. La entrega de este premio se realizará a través tres giftcards que son equivalentes a 6 meses de
                suscripción en Netflix para un suscriptor. Orizon S.A. no se hará responsable si el ganador agrega miembros extras a la
                suscripción, ya que esto puede generar que la duración de la suscripción no sea la que se indica. El pack de productos de La
                Mesa de Todos se entregará solo una vez a cada ganador.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">QUINTO: SORTEO</div>}
              onClick={toggleAccordion(5)}
              isOpen={isOpenQuestion === 5}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El sorteo se realizará el día 5 de agosto de 2022 entre todos los participantes que hayan realizado correctamente la
                dinámica establecida en las presentes bases. La agencias de publicidad, Pedro Juan y Diego S A. serán los encargados de
                escoger a los dos ganadores, entre los participantes que cumplan con las condiciones del concurso.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SEXTO: FECHA Y PUBLICACIÓN DEL GANADOR</div>}
              onClick={toggleAccordion(6)}
              isOpen={isOpenQuestion === 6}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Los ganadores se informarán mediante una publicación en la cuenta oficial de @lamesadetodos.cl el día 5 de agosto de 2022 .
                Asimismo, los ganadores serán contactados a través de un mensaje Direct a través de Instagram. A tal efecto, los
                participantes autorizan desde ya a difundir y/o publicar sus nombres en la cuenta de Instagram o cualquier otro medio que el
                organizador decidiere utilizar, sin derecho a contraprestación alguna. El ganador debe enviar los siguientes datos cuando
                sea contactado:
                <ul>
                  <li>1.- Nombre completo</li>
                  <li>2.- Teléfono de contacto</li>
                  <li>3.- Correo electrónico</li>
                  <li>4.- Rut</li>
                </ul>
                Es responsabilidad exclusiva de cada participante revisar oportunamente las notificaciones de sus redes sociales y tomar
                todas las medidas necesarias para recibir efectivamente la notificación que le informa ser ganador del Concurso. Orizon S.A.
                hará los mayores esfuerzos por contactar al ganador por un máximo de tres veces, dentro de un plazo de 2 días corridos
                contados desde la fecha de la publicación del ganador, plazo dentro del cual el ganador deberá reclamar el Premio. Orizon
                S.A. en ninguna circunstancia será responsable en caso de que no pueda contactar al ganador luego de los tres intentos antes
                señalados, por causas que no fueren imputables a Orizon S.A. En el evento que el organizador no logre contactar al ganador
                y/o este o su representante, según corresponda, no reclamare su premio dentro del plazo de 15 días antes indicado, el Orizon
                S.A. podrá realizar una nueva elección del ganador o bien declararlo desierto. La nueva elección del ganador se hará de
                conformidad a lo señalado en la cláusula “Quinto” anterior. A su vez, éste deberá cumplir con los mismo términos y
                condiciones establecidas en las presentes bases. Orizon S.A. se reserva la facultad de modificar la fecha, hora y lugar de
                la elección de los ganadores si este no pudiese ser efectuado, lo que será debidamente informado a los participantes a
                través de la cuenta de Instagram. Orizon S.A. se reserva el derecho de realizar un cambio en el ganador si es que la cuenta
                seleccionada es de carácter vulgar, ofensivo, incite al odio o promociona algún tipo de discriminación.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">SÉPTIMO: PLAZO DE ENTREGA DE PREMIOS</div>}
              onClick={toggleAccordion(7)}
              isOpen={isOpenQuestion === 7}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El plazo para retirar el premio será de 7 días hábiles contados desde la publicación de los ganadores en Instagram. Previo a
                la recepción del Premio, los ganadores deberán acreditar su identidad con su respectiva cédula de identidad. En el evento
                que el organizador no logre contactar al ganador y/o este o su representante, según corresponda, no reclamare su premio
                dentro del plazo de 7 días antes indicado, el Orizon S.A. podrá realizar una nueva elección del ganador o bien declararlo
                desierto. La nueva elección del ganador se hará de conformidad a lo señalado en la cláusula “Quinto” anterior. A su vez,
                éste deberá cumplir con los mismo términos y condiciones establecidas en las presentes bases.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">OCTAVO: AMBITO DE APLICACIÓN</div>}
              onClick={toggleAccordion(8)}
              isOpen={isOpenQuestion === 8}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                El Concurso se desarrollará en el territorio nacional, sus condiciones y requisitos se informarán y darán a conocer por los
                medios que Orizon S.A: a su juicio exclusivo califique.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">NOVENO: MODIFICACIÓN DE LAS BASES</div>}
              onClick={toggleAccordion(9)}
              isOpen={isOpenQuestion === 9}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Orizon S.A. podrá modificar el premio incluido en el Concurso y sus condiciones, por otros de valor similar, modificar el
                lugar del sorteo o de retiro de los premios y/o terminar, por razones de fuerza mayor, anticipadamente el Concurso,
                informado previamente a los participantes, a los ganadores según sea el caso, todo lo cual no generará responsabilidad ni
                compensaciones a favor de terceros o de los participantes.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO: RESPONSABILIDAD</div>}
              onClick={toggleAccordion(10)}
              isOpen={isOpenQuestion === 10}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Orizon S.A. no se hace responsable de que, una vez cumplida la fecha de término del concurso, siga circulando publicidad con
                referencia a éste. Asimismo, no se hará responsable si los ganadores no pudieran hacer efectivo su premio, ya que sea por
                motivo de salud (enfermedad o accidente), por incapacidad física, por asuntos laborales o personales. Cualquier impedimento
                del ganador, que no le permita hacer efectivo el premio, lo descalificara de manera automática. El organizador no se hace
                responsable de los daños o perjuicios que el premio objeto de estas bases pueda sufrir a contar del instante que el ganador
                lo reciba materialmente. La entrega del premio implicará la aceptación de parte de los ganadores del perfecto cumplimiento
                de lo promocionado, por lo tanto, los ganadores renuncian a cualquier reclamo posterior o acción legal en contra de Orizon
                S.A.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO PRIMERO: ACEPTACIÓN DE LAS BASES</div>}
              onClick={toggleAccordion(11)}
              isOpen={isOpenQuestion === 11}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                La participación en este concurso requiere el conocimiento y aceptación de estas bases.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO SEGUNDO: PARTICIPACIÓN EN DIFUSIÓN DE CONCURSO</div>}
              onClick={toggleAccordion(12)}
              isOpen={isOpenQuestion === 12}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Los ganadores se comprometen a prestar colaboración con el objeto de favorecer la difusión de dicho acontecimiento por los
                medios que Orizon S.A. determine, a favor de la necesaria transparencia que exige la fe pública. De esta forma será
                condición para recibir, retirar y hacer efectivo el premio, que los ganadores participen de las actividades, promociones,
                eventos, programas o difusión que Orizon S.A. determine. Asimismo, todo participante del concurso autoriza desde ya
                expresamente a Orizon S.A., sin necesidad de una autorización especial a utilizar la información recaudada a partir de la
                misma y a difundir sus nombres e imágenes mediante la forma de fotografías y/o videos, vinculado su participación en el
                concurso, renunciando todos ellos a recibir cualquier compensación, sea en dinero o en especie. Además, se faculta al Orizon
                S.A. para exhibir y/o publicitar a cualquiera de los participantes, a través de los medios y en la forma que lo estimen
                conveniente. Los participantes autorizan expresamente que la fotografía e información proporcionada en la participación y
                toda aquella que sea recolectada o almacenada durante la vigencia del concurso, incluyendo aquella relativa a la
                adquisición, contratación y uso de productos y servicios, sea tratada y comunicada por Orizon S.A., sus filiales, sus
                sociedades controladoras y las sociedades que estén bajo el control común de Orizon S.A. Los participantes facultan a Orizon
                S.A. a entregar a terceros, no individualizados en el párrafo anterior, información agregada que no incluya información de
                carácter personal que individualice e identifique al participante. Para el cumplimiento de los fines de respaldo y/o
                procesamiento, los datos y la demás información de los participantes puede ser almacenada y/o procesada por terceros
                distintos de Orizon S.A., ya sea en Chile o en el extranjero.
              </div>
            </Collapsible>
            <hr className="ma0 bb bb-0 b--black-10" />
            <Collapsible
              header={<div className="pv6 hover-c-on-action-secondary">DÉCIMO TERCERO: PROTOCOLIZACIÓN DE LAS BASES</div>}
              onClick={toggleAccordion(13)}
              isOpen={isOpenQuestion === 13}
            >
              <div className={`${handles.CollapsibleTextParagraph} bg-muted-5 pa6`}>
                Las presentes bases quedarán a disposición del público en la página{' '}
                <Link href="https://www.lamesadetodos.cl/">www.lamesadetodos.cl</Link>, y a través de los distintos medios publicitarios que
                Orizon S.A. libremente determine.
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
