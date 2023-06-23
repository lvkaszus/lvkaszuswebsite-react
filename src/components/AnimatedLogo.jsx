/*

    lvkaszusWebsite-React --- version: 4.1
    
                 Page Header
                 
       Animated Logo and Phrase Updater

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useEffect, useState } from 'react';

const Frazy = [
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
  const [aktualnaFraza, setAktualnaFraza] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAktualnaFraza((prevFraza) => (prevFraza + 1) % Frazy.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img src='/images/core/lvkaszus-logo.webp' alt='lvkaszus™ Animated Glitch Logo' className='mx-auto'></img>
      
      <div id="logo-description" className='m-0 font-light text-subtitleColor'>{Frazy[aktualnaFraza]}</div>
    </div>
  );
}

export default AnimatedLogo;