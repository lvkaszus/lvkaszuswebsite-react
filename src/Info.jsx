/*

    lvkaszusWebsite-React --- version: 4.2
    
                  /info

          'Informations' Page Code

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';

import AnimatedLogo from './components/AnimatedLogo';

import { useTranslation } from 'react-i18next';

import './Core.css';

const Info = () => {
  const { t } = useTranslation();

    return (
      <div className='font-fira font-bold text-center p-4 w-[550px]'>
        <Helmet>
            <title>Informacje</title>

            <meta name="description" content="Informacje - lvkasz.us" />
            <meta name="keywords" content="lvkaszus, lukaszus, pl, informacje, informacja, dodatkowe, o stronie, co to, co to jest, po co, na co" />
            <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <LanguageSelector />

        <AnimatedLogo />

        <p className='font-bold text-xl mb-[10px] sm:text-2xl sm:mt-[20px] sm:mb-0'>lvkaszus™ Website</p>
        <p className='font-normal text-xs sm:text-base mb-4'>{t('info-wsdesc')}</p>

        <p className='font-light text-xs sm:text-base mb-2'>{t('info-titletext')}</p>

        <div className='mt-1 sm:mt-4'>
            <a className='text-subtitleColor text-xs sm:text-base underline' href="https://github.com/lvkaszus/lvkaszuswebsite-react" target='_blank' rel='noreferrer'>{t('info-sclink')}</a>
        </div>

        <p className='font-normal text-xs sm:text-base text-left mt-2 sm:mt-8 mb-1'>{t('info-authors')}</p>
        
        <li className='font-light text-xs sm:text-base text-left mt-2 sm:mt-4'>lvkaszus<span className='font-normal'> {t('info-authorlvkaszus')}</span></li>
        <li className='font-light text-xs sm:text-base text-left mt-2 sm:mt-4'><a href='https://instagram.com/bazylixyz' className='underline' target='_blank' rel='noreferrer'>@bazylixyz</a><span className='font-normal'> {t('info-authorbazyli')}</span></li>


        <p className='font-normal text-xs sm:text-base text-left mt-4 sm:mt-8 mb-2'>{t('info-usbe')}</p>
        
        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          {t('info-tlscert')} <span className='font-light'>
            Let's Encrypt! </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          {t('info-server')} <span className='font-light'>
            GNU/Linux
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
        {t('info-wwwserver')} <span className='font-light'>
            NGINX
          </span>
        </li>
        

        <p className='font-normal text-xs sm:text-base text-left mt-4 sm:mt-8 mb-2'>{t('info-usfe')}</p>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
          {t('info-bbots')} <span className='font-light'>
            React + Vite
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
        {t('info-ulibs')} <span className='font-light'>
            React-Router-DOM + Helmet + TailwindCSS + axios
          </span>
        </li>

        <li className='font-normal text-xs sm:text-base text-left mt-1'>
         {t('info-fonts')} <span className='font-light'>
            FontAwesome + FiraCode
          </span>
        </li>

      </div>
    );
  }
  
export default Info;
