import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import Navbar from '../Components/Navbar';

import '../Core.css';

const LoadingScreen = () =>{
  const { t } = useTranslation();

  return (
    <div className='font-fira font-normal text-center p-2 w-450px fade-in'>
      <Helmet>
        <title>Ładowanie!</title>

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />

      <p className='text-center p-2 mt-6 text-xl'>{t('core-loading')}</p>
    </div>
  )
}

export default LoadingScreen;
