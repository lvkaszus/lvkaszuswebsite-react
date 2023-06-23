/*

    lvkaszusWebsite-React --- version: 4.1
    
                  /info

          'Informations' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';

import AnimatedLogo from './components/AnimatedLogo';

import './Core.css';

function Info() {
    return (
      <div className='font-fira font-bold text-center p-4 w-550px'>
        <Helmet>
            <title>Informacje</title>

            <meta name="description" content="Informacje - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, informacje, informacja, dodatkowe, o stronie, co to, co to jest, po co, na co" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <AnimatedLogo />

        <p className='font-bold text-xl mb-10px sm:text-2xl sm:mt-20px sm:mb-0'>lvkaszus™ Website</p>
        <p className='font-normal text-xs sm:text-base mb-4'>Strona internetowa Łukaszka! 😁</p>

        <p className='font-light text-xs sm:text-base mb-2'>Witaj na oficjalnej i jedynej mojej stronie w internecie!</p>

        <div className='mt-1 sm:mt-4'>
            <a className='text-subtitleColor text-xs sm:text-base underline' href="https://github.com/lvkaszus/lvkaszuswebsite-react" target='_blank' rel='noreferrer'>Zobacz kod źródłowy tej strony! 😄</a>
        </div>

        <p className='font-normal text-xs sm:text-base text-left mt-2 sm:mt-8 mb-1'>Autorzy strony, komponentów, grafiki oraz design:</p>
        
        <li className='font-light text-xs sm:text-base text-left mt-2 sm:mt-4'>lvkaszus <span className='font-normal'>(Cała strona od zera aż do końca wraz z oskryptowaniem itp.)</span></li>
        <li className='font-light text-xs sm:text-base text-left mt-2 sm:mt-4'><a href='https://instagram.com/bazylixyz' className='underline' target='_blank' rel='noreferrer'>@bazylixyz</a><span className='font-normal'> (Wsparcie dot. programowania w React)</span></li>


        <p className='font-normal text-xs sm:text-base text-left mt-4 sm:mt-8 mb-2'>Użyte oprogramowanie na serwerze (Back-end):</p>
        
        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          DNS: <span className='font-light'>
            Cloudflare
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          Certyfikat TLS: <span className='font-light'>
            Cloudflare </span><span className='font-normal'>(Google Trust Services)
            </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          Serwer: <span className='font-light'>
            GNU/Linux
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          Serwer WWW: <span className='font-light'>
            NGINX
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          Social-Media API: <span className='font-light'>
            lvkaszus SocialAPI </span><span className='font-normal'>(Python3 + telethon + requests + json etc.)
            </span>
        </li>


        <p className='font-normal text-xs sm:text-base text-left mt-4 sm:mt-8 mb-2'>Użyte oprogramowanie na stronie (Front-end):</p>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          Szkielet strony: <span className='font-light'>
            React + Vite
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
         Użyte biblioteki: <span className='font-light'>
            React-Router-DOM + Helmet + TailwindCSS + axios
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
         Czcionki: <span className='font-light'>
            FontAwesome + FiraCode
          </span>
        </li>

      </div>
    );
  }
  
export default Info;