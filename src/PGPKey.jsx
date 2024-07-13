/*

    lvkaszusWebsite-React --- version: 4.2
    
                    /pgp

              'PGP Key' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';

import AnimatedLogo from './components/AnimatedLogo';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

import './Core.css';

const PGPKey = () => {
    const { t } = useTranslation();

    return (
      <div className='font-fira font-bold text-center p-4 w-[600px]'>
        <Helmet>
            <title>Mój Klucz PGP</title>

            <meta name="description" content="Mój Klucz PGP - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, pgp, pgpkey, public, key, klucz, publiczny" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <LanguageSelector />

        <AnimatedLogo />

        <p className='font-normal text-base sm:text-xl my-6'>
            <FontAwesomeIcon icon={faKey} className='mr-2' />
            <span>{t('pgp-titletext1')} - <u>{t('pgp-titletext2')} <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /></u></span>
        </p>

        <p className='font-light text-sm sm:text-base'>{t('pgp-text1')}<br/><u>{t('pgp-text2')}</u></p>

        <p className='mt-[20px] text-sm sm:text-base'>{t('pgp-textfp')}</p>
        <code className='font-light text-[10px] sm:text-xs sm:font-normal border bg-gray-800 mb-[15px] py-1 px-1'>A607 30D6 65D5 04DC 49C3 50D7 85AF 58B1 5611 854A</code> 

        <div className='mt-6 mb-2'>
            <a className='text-xs sm:text-base text-red-500 transition-all duration-200 ease-in-out' href='mailto:pgp@lvkasz.us'>
                <FontAwesomeIcon icon={faLock} className='mr-2' />
                <span>PGP (pgp@lvkasz.us)</span>
            </a>
        </div>

        <div className='w-[300px] mx-auto'>
            <div className='my-[10px]'>
                <a className='text-sm no-underline text-linkColor py-[3px] flex items-center justify-center border border-gray-400 font-light hover:text-mainColor hover:border-mainColor hover:shadow-white transition-all duration-200 ease-in-out' href='/files/download/pgp/lvkaszus-PublicKey.pub' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faDownload} className='mr-2' />
                    <span>{t('pgp-dlpgp')}</span>
                </a>
            </div>

            <div className='my-10'>
                <NavLink exact="true" to="/" className='text-sm no-underline text-linkColor py-[3px] flex items-center justify-center border border-sky-400 font-light hover:text-sky-200 hover:border-sky-400 hover:shadow-blue transition-all duration-200 ease-in-out'>
                    <FontAwesomeIcon icon={faHouse} className='mr-2' />
                    <span>{t('pgp-bthp')}</span>
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
  
export default PGPKey;
