/*

    lvkaszusWebsite-React --- version: 4.1
    
          Smart Social-Media Buttons
          
        Flat Styled and with my own API
                Integration!

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSnapchat, faRedditAlien, faTelegram } from '@fortawesome/free-brands-svg-icons';


const SmartSocialButtons = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lvsapi.lvkasz.us/endpoint');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Aktualizacja danych JSON z API co 5 sekund - optymalna wartość.

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-300px mx-auto'>
        <div className='my-3'>
          <a href='https://instagram.com/lvkaszus.tm' className='text-base no-underline text-linkColor py-5px border border-pink-500 font-light flex items-center justify-center hover:text-pink-500 hover:border-2 hover:shadow-pink transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='mr-2' />
            <span>Instagram (<FontAwesomeIcon icon={faUser} className='ml-1' /> {data.instagram_followers})</span>
          </a>
        </div>

        <div className='my-3'>
          <a href='https://snapchat.com/add/lvkaszus' className='text-base no-underline text-linkColor py-5px border border-yellow-200 font-light flex items-center justify-center hover:text-yellow-200 hover:border-2 hover:shadow-yellow transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faSnapchat} className='mr-2' />
            <span>Snapchat (<FontAwesomeIcon icon={faStar} className='ml-1' /> {data.snapchat_score})</span>
          </a>
        </div>

        <div className='my-3'>
          <a href='https://bere.al/lvkaszus' className='text-base no-underline text-linkColor py-5px border border-gray-400 font-light flex items-center justify-center hover:text-gray-400 hover:border-2 hover:shadow-white transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <span>BeReal.</span>
          </a>
        </div>

        <div className='my-3'>
          <a href='https://reddit.com/user/lvkaszus' className='text-base no-underline text-linkColor py-5px border border-orange-400 font-light flex items-center justify-center hover:text-orange-400 hover:border-2 hover:shadow-orange transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faRedditAlien} className='mr-2' />
            <span>Reddit (K: {data.reddit_karma})</span>
          </a>
        </div>

        <div className='my-3'>
          <a href='https://telegram.me/lvkaszus' className='text-base no-underline py-5px border border-sky-400 font-light flex items-center justify-center hover:text-sky-400 hover:border-2 hover:shadow-blue transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTelegram} className='mr-2' />
            <span>Telegram (● {data.telegram_isOnline ? 'Online' : 'Offline'})</span>
          </a>
        </div>

        <div className='my-3'>
          <a href='https://ask.lvkasz.us' className='text-base no-underline text-linkColor py-5px border border-orange-200 font-light flex items-center justify-center hover:text-orange-200 hover:border-2 hover:shadow-lightorange transition-all duration-200 ease-in-out' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faCircleQuestion} className='mr-2' />
            <span>Anonimowe pytania</span>
          </a>
        </div>
      </div>
  );
};

export default SmartSocialButtons;
