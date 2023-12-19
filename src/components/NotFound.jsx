/*

    lvkaszusWebsite-React --- version: 4.2
    
                  HTTP 404
                  
          Basic '404: Not Found' Page.

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import Navbar from './Navbar';

import AnimatedLogo from './AnimatedLogo';

import '../Core.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='font-fira font-bold text-center p-4'>
      <Helmet>
        <title>HTTP 404!</title>

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />

      <AnimatedLogo />

      <p className='font-normal text-2xl my-6'>{t('core-notfound')} </p>
    </div>
  );
}

export default NotFound;