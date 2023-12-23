/*

    lvkaszusWebsite-React --- version: 4.2
    
                  /donate

            'Donate' Page Code

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
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faMonero } from '@fortawesome/free-brands-svg-icons';
import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons';

import './Core.css';

const Donate = () => {
    const { t } = useTranslation();

    return (
      <div className='font-fira font-bold text-center p-4 w-800px'>
        <Helmet>
            <title>Dotacje</title>

            <meta name="description" content="Kontakt - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, social, media, instagram, snapchat, telegram, pgp, public, key, kontakt, ze, mną, contact, with, me, mail" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <LanguageSelector />

        <AnimatedLogo />

        <p className='font-normal text-sm sm:text-xl my-6'>{t('donate-titletext')}</p>

        <p className='font-light text-xs sm:text-base mb-4'>
        {t('donate-text1')}<br/><br/>{t('donate-text2')}
        </p>

        <div className="my-3">
            <a className="text-xs sm:text-base text-green-300" target='_blank' rel='noreferrer noopener' href="https://tipo.live/p/lvkaszus">
                <FontAwesomeIcon icon={faMoneyBill} className='mr-2' />
                <span>{t('donate-polishmethod')}</span>
            </a>
        </div>

        <div className="my-3">
            <a className="text-xs sm:text-base text-green-300" target='_blank' rel='noreferrer noopener' href="https://liberapay.com/lvkaszus">
                <FontAwesomeIcon icon={faMoneyBill} className='mr-2' />
                <span>{t('donate-internationalmethod')}</span>
            </a>
        </div>


        <div className='my-3 break-words w-300px mx-auto sm:w-full'>
            <p className='font-normal text-yellow-400 text-xs sm:text-base mt-6'>
                <FontAwesomeIcon icon={faBitcoin} className='mr-2' />
                bc1qpwsvxfwpjxkdkppytxj8yzpnxquvm4fa99uqgt
            </p>

            <p className='font-normal text-orange-400 text-xs sm:text-base my-4'>
                <FontAwesomeIcon icon={faMonero} className='mr-2' />
                46HEartPRQ5DiUzbbqDWkyiTzKpBaF6DeZnSkxSjvdns5ZFE4GgKJ6dFX1XSZeYKCdMjDMD9HurmuVccSZ2E5psd1vSu9BA
            </p>

            <p className='font-normal text-gray-300 text-xs sm:text-base my-4'>
                <FontAwesomeIcon icon={faLitecoinSign} className='mr-2' />
                LctDm8LjJiPmycFCsJCRVLargJuPbguxHJ
            </p>
        </div>
      </div>
    );
  }
  
export default Donate;
