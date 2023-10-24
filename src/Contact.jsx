/*

    lvkaszusWebsite-React --- version: 4.2
    
                 /contact

            'Contact' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './Components/Navbar';

import AnimatedLogo from './Components/AnimatedLogo';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons/faShareFromSquare';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

import './Core.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
      <div className='font-fira font-bold text-center p-4 w-800px'>
        <Helmet>
            <title>Kontakt</title>

            <meta name="description" content="Kontakt - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, social, media, instagram, snapchat, telegram, pgp, public, key, kontakt, ze, mną, contact, with, me, mail" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <AnimatedLogo />

        <p className='font-normal text-sm sm:text-xl my-6'>{t('contact-titletext')}</p>

        <p className='font-light text-xs sm:text-base mb-4'>
        {t('contact-text1')}<br/><br/>{t('contact-text2')}<br/><br/><span className='font-normal text-red-500'>{t('contact-text3')}</span>
        </p>

        <div className="my-3">
            <NavLink exact="true" to="/" className="text-xs sm:text-base text-orange-400">
                <FontAwesomeIcon icon={faShareFromSquare} className='mr-2' />
                <span>{t('contact-msm')}</span>
            </NavLink>
        </div>

        <div className="my-3">
            <a className="text-xs sm:text-base text-sky-400" href="mailto:hello@lvkasz.us">
                <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                <span>{t('contact-meat')}</span>
            </a>
        </div>

        <div className="mt-6 mb-2">
            <a className="text-xs sm:text-base text-red-500" href="mailto:pgp@lvkasz.us">
                <FontAwesomeIcon icon={faLock} className='mr-2' />
                <span>{t('contact-meap')}</span>
            </a>
        </div>

      </div>
    );
  }
  
export default Contact;
