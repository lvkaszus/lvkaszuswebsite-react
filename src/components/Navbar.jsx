/*

    lvkaszusWebsite-React --- version: 4.2
    
                 Page Header
                 
             Basic Navigation Bar

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="font-light text-xs mt-2 mb-1">
      <NavLink exact="true" to="/" className="underline ml-2 mr-2">
        {t('navbar-home')}
      </NavLink>
      <NavLink to="/about_me" className="underline ml-2 mr-2">
        {t('navbar-about_me')}
      </NavLink>
      <NavLink to="/contact" className="underline ml-2 mr-2">
        {t('navbar-contact')}
      </NavLink>
      <NavLink to="/pgp" className="underline ml-2 mr-2">
        {t('navbar-pgp')}
      </NavLink>
      <NavLink to="/info" className="underline ml-2 mr-2">
        {t('navbar-info')}
      </NavLink>
    </nav>
  );
};

export default Navbar;