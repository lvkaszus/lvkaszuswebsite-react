/*

    lvkaszusWebsite-React --- version: 4.1
    
                 /contact

            'Contact' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';

import AnimatedLogo from './components/AnimatedLogo';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import './Core.css';

function Contact() {
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

        <p className='font-normal text-sm sm:text-xl my-6'>chcesz się ze mną skontaktować?</p>

        <p className='font-light text-xs sm:text-base mb-4'>
            Jeżeli chciałbyś lub chciałabyś się ze mną skontaktować w sposób pisemny lub głosowy, możesz napisać do mnie lub zadzwonić korzystając z moich mediów społecznościowych. Pozatym, zawsze możemy się umówić na spotkanie i pogadać 😁<br/><br/>Możesz również napisać do mnie wiadomość e-mail, zarówno w tradycyjnej metodzie jak i szyfrowanej kluczem PGP którego znajdziesz u góry klikając w link pod tytułem &apos;klucz pgp&apos;<br/><br/><span className='font-normal text-red-500'>Pamiętaj tylko, że nigdy nie podam ci mojego prywatnego numeru telefonu. Mam ku temu swoje powody 😉</span>
        </p>

        <div className="my-3">
            <NavLink exact="true" to="/" className="text-xs sm:text-base text-orange-400">
                <FontAwesomeIcon icon={faShareFromSquare} className='mr-2' />
                <span>Moje media społecznościowe</span>
            </NavLink>
        </div>

        <div className="my-3">
            <a className="text-xs sm:text-base text-sky-400" href="mailto:lukasz@lvkasz.us">
                <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                <span>Mój Adres E-mail (tradycyjny!)</span>
            </a>
        </div>

        <div className="mt-6 mb-2">
            <a className="text-xs sm:text-base text-red-500" href="mailto:pgp@lvkasz.us">
                <FontAwesomeIcon icon={faLock} className='mr-2' />
                <span>Mój Adres E-mail (tylko PGP!)</span>
            </a>
        </div>

      </div>
    );
  }
  
export default Contact;