/*

    lvkaszusWebsite-React --- version: 4.1
    
                    /pgp

              'PGP Key' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';

import AnimatedLogo from './components/AnimatedLogo';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faTriangleExclamation, faLock, faFileSignature, faDownload, faHouse } from '@fortawesome/free-solid-svg-icons';

import './Core.css';

function PGPKey() {
    return (
      <div className='font-fira font-bold text-center p-4'>
        <Helmet>
            <title>Mój Klucz PGP</title>

            <meta name="description" content="Mój Klucz PGP - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, pgp, pgpkey, public, key, klucz, publiczny" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <AnimatedLogo />

        <p className='font-normal text-base sm:text-xl my-6'>
            <FontAwesomeIcon icon={faKey} className='mr-2' />
            <span>Mój Klucz PGP - <u>tylko dla zaawansowanych <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /></u></span>
        </p>

        <p className='font-light text-sm sm:text-base'>Chcesz podpisać,  zaszyfrować lub<br/>odszyfrować jakąś wiadomość lub plik związany ze mną i mi to wysłać?<br/><u>Pobierz mój klucz publiczny PGP!</u></p>

        <p className='mt-20px text-sm sm:text-base'>Fingerprint klucza publicznego:</p>
        <code className='font-light text-xxs sm:text-xs sm:font-normal border bg-gray-800 mb-15px py-1 px-1'>88B4 1A1B B27D F37B 75B5 90F3 8A99 4119 D424 5038</code> 

        <div className='mt-6 mb-2'>
            <a className='text-xs sm:text-base text-red-500 transition-all duration-200 ease-in-out' href='mailto:pgp@lvkasz.us'>
                <FontAwesomeIcon icon={faLock} className='mr-2' />
                <span>PGP (pgp@lvkasz.us)</span>
            </a>
        </div>

        <div className='w-300px mx-auto'>
            <div className='my-10px'>
                <a className='text-sm no-underline text-linkColor py-3px flex items-center justify-center border border-gray-400 font-light hover:text-mainColor hover:border-mainColor hover:shadow-white transition-all duration-200 ease-in-out' href='/files/download/pgp/lvkaszus-PublicKey.pub.sig' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faFileSignature} className='mr-2' />
                    <span>Pobierz sygnaturę klucza</span>
                </a>
            </div>

            <div className='my-10px'>
                <a className='text-sm no-underline text-linkColor py-3px flex items-center justify-center border border-gray-400 font-light hover:text-mainColor hover:border-mainColor hover:shadow-white transition-all duration-200 ease-in-out' href='/files/download/pgp/lvkaszus-PublicKey.pub' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faDownload} className='mr-2' />
                    <span>Pobierz klucz PGP</span>
                </a>
            </div>

            <div className='my-20px'>
                <NavLink exact="true" to="/" className='text-sm no-underline text-linkColor py-3px flex items-center justify-center border border-sky-400 font-light hover:text-sky-200 hover:border-sky-400 hover:shadow-blue transition-all duration-200 ease-in-out'>
                    <FontAwesomeIcon icon={faHouse} className='mr-2' />
                    <span>Powrót do strony głównej</span>
                </NavLink>
            </div>
        </div>
      </div>
    );
  }
  
export default PGPKey;