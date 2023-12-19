/*

    lvkaszusWebsite-React --- version: 4.2
    
               Language Selector
                 
        Minimal language selector with
               Flags as buttons

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mt-4 space-x-2">

      <button onClick={() => changeLanguage('pl')}>
        <img className="border-white border w-6 h-4" src="/images/language-selector/polish-flag.png" alt="Polski" />
      </button>
      
      <button onClick={() => changeLanguage('en')}>
        <img className="border-white border w-6 h-4" src="/images/language-selector/usa-flag.png" alt="English" />
      </button>

    </div>
  );
};

export default LanguageSelector;