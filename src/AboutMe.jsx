/*

    lvkaszusWebsite-React --- version: 4.2
    
                 /about_me

            'About Me' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';

import AnimatedLogo from './components/AnimatedLogo';

import { Link } from 'react-router-dom';

import './Core.css';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className='font-fira font-bold text-center p-4 w-[800px]'>
      <Helmet>
        <title>O mnie</title>
        <meta name="description" content="O mnie - lvkasz.us" />
        <meta
          name="keywords"
          content="lvkaszus, lukaszus, pl, social, media, instagram, snapchat, telegram, pgp, public, key, informacje, information, git, github, developers, about, me, o mnie"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <LanguageSelector />

      <AnimatedLogo />

      <p className='font-normal text-sm sm:text-xl my-6'>{t('about_me-titletext')}</p>

      <img
        src='/images/me/me.jpg'
        alt='lvkaszus'
        className='hidden w-[45%] h-[200px] mt-10 float-left border border-white sm:block'
      />

      <p className='font-light text-xs float-none w-full mr-4 mb-0 leading-normal break-words text-center sm:text-sm sm:float-right sm:w-1/2 sm:text-left'>{t('about_me-biogram1')}<br /><br />{t('about_me-biogram2')}
      </p>

      <div className='clear-both' />

      <p className='font-normal text-sm text-red-500 sm:hidden'>{t('about_me-tsdw')}</p>

      <div className='mt-[20px]'>
        <Link exact="true" to="/" className='text-sm underline text-subtitleColor'>{t('about_me-smb')}</Link>
      </div>
    </div>
  );
}

export default AboutMe;
