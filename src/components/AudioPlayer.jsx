/*

    lvkaszusWebsite-React --- version: 4.1
    
                 Audio Player
                 
       Minimal music player for Homepage

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
  const SongFile = "/files/music/radical_redemption-nolz-kingpin.mp3";
  const SongName = "Radical Redemption & Nolz - Kingpin 🤘🏼";
  
  const audioRef = useRef(null);
  const playBtnRef = useRef(null);
  const pauseBtnRef = useRef(null);
  const progressRef = useRef(null);
  const timeRef = useRef(null);
  
  useEffect(() => {
    const audio = audioRef.current;
    const playBtn = playBtnRef.current;
    const pauseBtn = pauseBtnRef.current;
    const progress = progressRef.current;
    const time = timeRef.current;
    
    // Auto-play - disabled!
    // audio.play();
    
    playBtn.addEventListener('click', () => {
      audio.play();
    });
    
    pauseBtn.addEventListener('click', () => {
      audio.pause();
    });
    
    audio.addEventListener('timeupdate', () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      const remainingTime = duration - currentTime;
      const progressPercent = ((duration - remainingTime) / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = Math.floor(remainingTime % 60);
      time.textContent = `-${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
    
    return () => {
      audio.removeEventListener('timeupdate', () => {});
    };
  });
  
  return (
    <div id="lvkaszusPlayer" className='w-40 mx-auto'>
      <audio id="myAudio" src={SongFile} ref={audioRef} />
      
      <div id="audioControls">
        <button id="playBtn" className="bg-transparent border-none text-white text-base font-normal cursor-pointer p-2 my-2" ref={playBtnRef}>
            <FontAwesomeIcon icon={faPlay} className='mr-2' />
        </button>
        
        <button id="pauseBtn" className="bg-transparent border-none text-white text-base font-normal cursor-pointer p-2 my-2" ref={pauseBtnRef}>
            <FontAwesomeIcon icon={faPause} className='mr-2' />
        </button>
        
        <div id="progressContainer" className='w-full'>
          <div id="progressBar" className="bg-white text-white w-full h-1px my-1" ref={progressRef}></div>
        </div>
        
        <div id="currentTime" className='text-center text-white text-base' ref={timeRef}></div>
      </div>
      
      <p id="currentSongName" className='font-bold text-sm'>
        Aktualna piosenka: <br></br><span id="currentSongTitle" className='font-light'>{SongName}</span>
      </p>
    </div>
  );
};

export default AudioPlayer;