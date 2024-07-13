/*

    lvkaszusWebsite-React --- version: 4.2
    
                     /

              'Home' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';

import AnimatedLogo from './components/AnimatedLogo';
import AudioPlayer from './components/AudioPlayer';

import { useTranslation } from 'react-i18next';

import './Core.css';
import SocialMediaButtons from './components/SocialMediaButtons';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='font-fira font-bold text-center p-4'>
      <Helmet>
        <title>lvkaszus™</title>

        <meta name="description" content="lvkasz.us - Strona główna" />
        <meta name="keywords" content="lvkaszus, pl, lukaszus, social, media, instagram, snapchat, telegram, pgp, public, key" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <LanguageSelector />

      <AnimatedLogo />

      <p className='font-normal text-base my-6'>{t('home-titletext')}</p>

      <SocialMediaButtons />

      <AudioPlayer />
    </div>
  );
}

export default Home;
