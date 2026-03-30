import React, { useState } from 'react';
import { useQuizSounds } from '../hooks/useQuizSounds';
import { PixelHeart, PixelCrown, PixelRocket, PixelInfinity } from './PixelIcons';

const StartScreen = ({ onStart }) => {
  const { playClick } = useQuizSounds();
  const [hearts, setHearts] = useState(3);

  const handleStart = () => {
    playClick();
    onStart(hearts);
  };

  const difficultyBtnBase = "flex-1 border-2 sm:border-3 border-black font-black text-base sm:text-xl transition-all";
  const difficultyBtnActive = "bg-brutal-yellow translate-y-0.5 shadow-none";
  const difficultyBtnInactive = "bg-white shadow-brutal-sm";

  return (
    <div className="card-brutal bg-brutal-yellow animate-pop-brutal text-center flex flex-col items-center">
      <div className="w-full flex-1 flex flex-col items-center justify-center overflow-y-auto px-1 gap-2 sm:gap-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-black mb-1 sm:mb-4 uppercase drop-shadow-md leading-tight shrink-0">
          Guess The Output
        </h1>
        <h2 className="text-sm sm:text-xl md:text-2xl font-bold bg-white inline-block px-2 py-1 sm:px-4 sm:py-2 border-2 sm:border-3 border-black mb-4 sm:mb-10 transform -rotate-2 shrink-0">
          A Playful Journey into JS Weirdness
        </h2>

        {/* Difficulty Selector */}
        <div className="w-full max-w-xs sm:max-w-sm mb-4 sm:mb-8 bg-white border-3 sm:border-4 border-black p-3 sm:p-6 shadow-brutal-sm sm:shadow-brutal z-10 relative shrink-0">
          <label className="block text-lg sm:text-2xl font-black mb-3 sm:mb-4 uppercase text-center border-b-3 sm:border-b-4 border-black pb-2 sm:pb-3">
            Select Difficulty
          </label>
          
          {/* Hearts Display */}
          <div className="text-center mb-4 sm:mb-6 h-8 sm:h-12 flex items-center justify-center text-xl sm:text-4xl gap-1 sm:gap-2">
            {hearts === Infinity 
              ? <><PixelCrown className="w-7 h-7 sm:w-10 sm:h-10 mr-1" color="#FACC15" /> <span className="text-brutal-pink font-black">GOD</span></> 
              : Array.from({ length: hearts }).map((_, i) => <PixelHeart key={i} className="w-5 h-5 sm:w-8 sm:h-8 text-red-500" color="currentColor" />)
            }
          </div>
          
          {/* Difficulty Buttons */}
          <div className="flex gap-1.5 sm:gap-3">
             <button 
               onClick={() => { playClick(); setHearts(1); }} 
               className={`${difficultyBtnBase} py-1.5 sm:py-2 ${hearts===1 ? difficultyBtnActive : difficultyBtnInactive}`}
             >1</button>
             <button 
               onClick={() => { playClick(); setHearts(3); }} 
               className={`${difficultyBtnBase} py-1.5 sm:py-2 ${hearts===3 ? difficultyBtnActive : difficultyBtnInactive}`}
             >3</button>
             <button 
               onClick={() => { playClick(); setHearts(5); }} 
               className={`${difficultyBtnBase} py-1.5 sm:py-2 ${hearts===5 ? difficultyBtnActive : difficultyBtnInactive}`}
             >5</button>
             <button 
               onClick={() => { playClick(); setHearts(Infinity); }} 
               className={`${difficultyBtnBase} py-1.5 sm:py-2 flex items-center justify-center ${hearts===Infinity ? 'bg-brutal-pink translate-y-0.5 shadow-none' : 'bg-gray-100 shadow-brutal-sm'}`}
             >
               <PixelInfinity className="w-5 h-5 sm:w-8 sm:h-8" color="currentColor" />
             </button>
          </div>
        </div>
        
        {/* Start Button */}
        <button 
          className="btn-brutal btn-brutal-pink text-base sm:text-xl w-full max-w-xs sm:max-w-sm flex items-center justify-center gap-2 shrink-0 mb-1" 
          onClick={handleStart}
          id="start-button"
        >
          <span>Start Playing</span> <PixelRocket className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
