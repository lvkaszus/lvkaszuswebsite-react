/*

    lvkaszusWebsite-React --- version: 4.1
    
                 /about_me

            'About Me' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';

import AnimatedLogo from './components/AnimatedLogo';

import { NavLink } from 'react-router-dom';

import './Core.css';

function AboutMe() {
  return (
    <div className='font-fira font-bold text-center p-4 w-800px'>
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

      <AnimatedLogo />

      <p className='font-normal text-sm sm:text-xl my-6'>kim jestem?</p>

      <img
        src='/images/me/me_1.jpg'
        alt='lvkaszus'
        className='hidden w-45 h-280px float-left border border-white sm:block'
      />

      <p className='font-light text-xs float-none w-full mr-4 mb-0 leading-normal break-words text-center sm:text-sm sm:float-right sm:w-1/2 sm:text-left'>Nazywam się Łukasz, znany bardziej jako &quot;lvkaszus&quot;. Interesuję się informatyką każdego rodzaju oraz programowaniem. Lubię odkrywać nowe rzeczy 😃 Uwielbiam się bawić w halach z serwerami i innymi urządzeniami teleinformatycznymi. To, że interesuję się informatyką nie oznacza że nie dotknąłem żadnej dziewczyny jak wiele głupich ludzi myśli. 😉<br /><br />Mój opis który teraz czytasz, jak i ogólnie całą tą stronę napisałem samemu korzystając z czystego pliku .JSX i kilku wtyczek ułatwiających życie, ciekawie prawda? 😄
      </p>

      <div className='clear-both' />

      <p className='font-normal text-sm text-red-500 sm:hidden'>
        Na tej stronie jest moje zdjęcie. Aby je wyświetlić, uruchom tę stronę
        na szerszym ekranie!
      </p>

      <div className='mt-20px'>
        <NavLink exact="true" to="/" className='text-sm underline text-subtitleColor'>
          Moje media społecznościowe znajdziesz, klikając w ten link
        </NavLink>
      </div>
    </div>
  );
}

export default AboutMe;