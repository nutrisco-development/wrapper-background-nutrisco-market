import React, {useEffect, useState} from 'react';
import {useCssHandles} from 'vtex.css-handles';
import './CountdownTemplate.css';

const CSS_HANDLES = [
  'BannerTimerContainer',
  'BannerTimerTitle',
  'BannerTimerCountImage',
  'BannerTimerLink',
  'BannerTimerCountdown',
  'Countdown',
  'Light',
  'CountdownWrapper',
  'CountdownDigit',
  'CountdownLabel',
  'CountdownTwoPoints',
  'BannerTimerImage',
  'CountdownWrapperHeading',
  'CountdownWrapperFooter',
  'CountdownItem0',
  'CountdownItem1',
  'CountdownItem2',
  'CountdownItem3',
  'CountdownItem4',
  'CountdownItem5',
  'CountdownImageCountdown',
];

const CountdownTemplate = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const [isLoading, setLoading] = useState(true);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date('2023-05-31T23:59:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setLoading(false);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return !isLoading ? (
    <>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div
          className={`${handles.BannerTimerContainer} vtex-flex-layout-0-x-flexRow--SeparatorBottom vtex-flex-layout-0-x-flexRow--SeparatorTopHome`}
        >
          <div class="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--section-title flex tc items-center justify-center t-body c-on-base">
            <div class="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--section-title">
              <h2 class="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--section-title t-heading-2 vtex-rich-text-0-x-headingLevel2 vtex-rich-text-0-x-headingLevel2--section-title vtex-rich-text-0-x-heading-level-2">
                ¡SOLO POR POCAS HORAS! 🔥
              </h2>
              <p class="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--section-title">
                <span class="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--section-title">line</span>
                <br />
                <span class="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--section-title">line</span>
                <br />
                <span class="i vtex-rich-text-0-x-italic vtex-rich-text-0-x-italic--section-title">line</span>
              </p>
            </div>
          </div>
          <div className={handles.BannerTimerCountImage}>
            <a className={handles.BannerTimerLink} href="/252?map=productClusterIds">
              <div className={handles.BannerTimerCountdown}>
                <div className={handles.Countdown}>
                  <div className={handles.CountdownWrapperHeading}>¡Aprovecha🔥!</div>
                  <div className={`${handles.CountdownWrapper} ${handles.CountdownItem1}`}>
                    <span className={handles.CountdownDigit}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className={handles.CountdownLabel}>Horas</span>
                  </div>
                  <div className={`${handles.CountdownTwoPoints} ${handles.CountdownItem2}`}>:</div>
                  <div className={`${handles.CountdownWrapper} ${handles.CountdownItem3}`}>
                    <span className={handles.CountdownDigit}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className={handles.CountdownLabel}>Minutos</span>
                  </div>
                  <div className={`${handles.CountdownTwoPoints} ${handles.CountdownItem4}`}>:</div>
                  <div className={`${handles.CountdownWrapper} ${handles.CountdownItem5}`}>
                    <span className={handles.CountdownDigit}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className={handles.CountdownLabel}>Segundos</span>
                  </div>
                  <div className={handles.CountdownWrapperFooter}>¡Nos volvimos locos!</div>
                </div>
              </div>

              <div className="BannerTimerImage">
                {/* START */}

                {/* <div className="LazyImageWrap Loaded">
                  <picture>
                    <source media="(max-width: 840px)" type="image/jpeg" srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-RAYO-MOB.jpg" />
                    <source media="(max-width: 1440px)" type="image/jpeg" srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-RAYO-DESK.jpg" />
                    <img className={handles.CountdownImageCountdown} src="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-RAYO-DESK.jpg" alt=" " width="100%" />
                  </picture>
                </div> */}

                {/* CONTADOR 25% OFF / START */}
                <div className="LazyImageWrap Loaded">
                  <picture>
                    <source
                      media="(max-width: 840px)"
                      type="image/jpeg"
                      srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-25-MOB.jpg"
                    />
                    <source
                      media="(max-width: 1440px)"
                      type="image/jpeg"
                      srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-25-DESK.jpg"
                    />
                    <img
                      className={handles.CountdownImageCountdown}
                      src="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-25-DESK.jpg"
                      alt=" "
                      width="100%"
                    />
                  </picture>
                </div>

                {/* CONTADOR 50% OFF / START */}
                {/* <div className="LazyImageWrap Loaded">
                  <picture>
                    <source media="(max-width: 840px)" type="image/jpeg" srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-50-MOB.jpg" />
                    <source media="(max-width: 1440px)" type="image/jpeg" srcset="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-50-DESK.jpg" />
                    <img className={handles.CountdownImageCountdown} src="https://orizonb2ccl.vtexassets.com/arquivos/BANNER-CONTADOR-BLACK-50-DESK.jpg" alt=" " width="100%" />
                  </picture>
                </div> */}

                {/* END */}
              </div>
            </a>
          </div>
        </div>
      ) : null}
    </>
  ) : null;
};

export default CountdownTemplate;
