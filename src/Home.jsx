/*

    lvkaszusWebsite-React --- version: 4.1
    
                     /

              'Home' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';

import AnimatedLogo from './components/AnimatedLogo';
import SmartSocialButtons from './components/SmartSocialButtons';
import AudioPlayer from './components/AudioPlayer';

import './Core.css';

function Home() {
  return (
    <div className='font-fira font-bold text-center p-4'>
      <Helmet>
        <title>lvkaszus™</title>

        <meta name="description" content="lvkasz.us - Strona główna" />
        <meta name="keywords" content="lvkaszus, pl, lukaszus, social, media, instagram, snapchat, telegram, pgp, public, key" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <AnimatedLogo />

      <p className='font-normal text-base my-6'>moje media społecznościowe poniżej:</p>

      <SmartSocialButtons />

      <AudioPlayer />
    </div>
  );
}

export default Home;