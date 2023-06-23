/*

    lvkaszusWebsite-React --- version: 4.1
    
                 Page Header
                 
             Basic Navigation Bar

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-light text-xs mt-2 mb-1">
      <NavLink exact="true" to="/" className="underline ml-2 mr-2">
        główna
      </NavLink>
      <NavLink to="/about_me" className="underline ml-2 mr-2">
        o mnie
      </NavLink>
      <NavLink to="/contact" className="underline ml-2 mr-2">
        kontakt
      </NavLink>
      <NavLink to="/pgp" className="underline ml-2 mr-2">
        klucz pgp
      </NavLink>
      <NavLink to="/info" className="underline ml-2 mr-2">
        informacje
      </NavLink>
    </nav>
  );
};

export default Navbar;