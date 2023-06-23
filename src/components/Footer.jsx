/*

    lvkaszusWebsite-React --- version: 4.1
    
                 Page Footer
                 
       It is basically a page footer..

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudflare, faLinux, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faServer } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="font-fira absolute hidden bottom-5 w-full text-center lg:block">
      <NavLink exact="true" to="/" className="text-xs no-underline">
        <p className="my-1 py-0 text-linkFooterColor">
          lvkaszus™ // @lvkaszus 2022-2023
        </p>
        
        <p className="my-1 py-0 text-linkFooterColor">
        <FontAwesomeIcon icon={faCloudflare} className='mr-2' />
        <span>CloudflareDNS + </span>

        <FontAwesomeIcon icon={faServer} className='mr-2' />
        <span>lvkaszusServer + </span>

        <FontAwesomeIcon icon={faLinux} className='mr-2' />
        <span>Linux + </span>

        <FontAwesomeIcon icon={faReact} className='mr-2' />
        <span>React + Vite = </span><FontAwesomeIcon icon={faHeart} className='mr-2' />
        </p>
        
        <p className="my-1 py-0 text-linkFooterColor">
          lvkaszusWebsite - version: 4.1 - 20.06.2023 : latest
        </p>
      </NavLink>
    </footer>
  );
};

export default Footer;