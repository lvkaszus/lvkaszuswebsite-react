/*

    lvkaszusWebsite-React --- version: 4.2
    
                 Page Footer
                 
  A Page Footer with GitHub version checking!

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faServer } from '@fortawesome/free-solid-svg-icons';

import { VersionCheck } from './VersionCheck';

const Footer = () => {
  const { currentVersion, latestVersion, isLatestVersion } = VersionCheck();

  return (
    <footer className="font-fira absolute hidden bottom-5 w-full text-center xl:block">
      <NavLink exact="true" to="/" className="text-xs no-underline">
        <p className="my-1 py-0 text-linkFooterColor">
          lvkaszus™ // @lvkaszus 2022-{new Date().getFullYear()}
        </p>
        
        <p className="my-1 py-0 text-linkFooterColor">
          <FontAwesomeIcon icon={faServer} className='mr-2' />
          <span>lvkaszusServer + </span>

          <FontAwesomeIcon icon={faLinux} className='mr-2' />
          <span>Linux + </span>

          <FontAwesomeIcon icon={faReact} className='mr-2' />
          <span>React + Vite = </span><FontAwesomeIcon icon={faHeart} className='mr-2' />
        </p>

        {isLatestVersion ? (
          <p className="my-1 py-0 text-linkFooterColor">lvkaszusWebsite - version: {currentVersion} - 13.07.2024 : latest</p>
        ) : (
          <p className="my-1 py-0 text-linkFooterColor">lvkaszusWebsite - version: {currentVersion} - 13.07.2024 : please upgrade to {latestVersion}!</p>
        )}
      </NavLink>
    </footer>
  );
};

export default Footer;
