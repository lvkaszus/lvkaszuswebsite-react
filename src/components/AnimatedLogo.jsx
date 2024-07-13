/*

    lvkaszusWebsite-React --- version: 4.2
    
                 Page Header
                 
       Animated Logo and Phrase Updater

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const phrases = [
  "informatyka",
  "sieci komputerowe",
  "technika komputerowa",
  "linux / *nix",
  "programowanie",
  "dj",
  "zabawa",
  "życie"
];

function AnimatedLogo() {
  const { t } = useTranslation();
  const [actualPhrase, setActualPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActualPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img src='/images/core/lvkaszus-logo.webp' alt='lvkaszus™ Animated Glitch Logo' width='350px' height='125px' className='mx-auto'></img>
      
      <div id="logo-description" className='m-0 font-light text-subtitleColor'>{t(phrases[actualPhrase])}</div>
    </div>
  );
}

export default AnimatedLogo;