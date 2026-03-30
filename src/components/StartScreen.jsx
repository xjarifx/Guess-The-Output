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

  return (
    <div className="card-brutal bg-brutal-yellow animate-pop-brutal text-center flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl text-black mb-2 md:mb-4 uppercase drop-shadow-md leading-tight">
        Guess The Output
      </h1>
      <h2 className="text-lg md:text-2xl font-bold bg-white inline-block px-3 py-1 md:px-4 md:py-2 border-2 md:border-4 border-black mb-8 md:mb-12 transform -rotate-2">
        A Playful Journey into JS Weirdness
      </h2>

      <div className="w-full max-w-sm mb-8 md:mb-10 bg-white border-4 border-black p-4 md:p-6 shadow-brutal z-10 relative">
        <label className="block text-xl md:text-2xl font-black mb-4 uppercase text-center border-b-4 border-black pb-2 md:pb-3">
          Select Difficulty
        </label>
        
        <div className="text-center mb-6 h-10 md:h-12 flex items-center justify-center text-2xl md:text-4xl gap-1 md:gap-2">
          {hearts === Infinity 
            ? <><PixelCrown className="w-8 h-8 md:w-10 md:h-10 mr-1 md:mr-2" color="#FACC15" /> <span className="text-brutal-pink">GOD</span></> 
            : Array.from({ length: hearts }).map((_, i) => <PixelHeart key={i} className="w-6 h-6 md:w-8 md:h-8 text-red-500" color="currentColor" />)
          }
        </div>
        
        <div className="flex gap-2 md:gap-3">
           <button 
             onClick={() => { playClick(); setHearts(1); }} 
             className={`flex-1 py-1 md:py-2 border-2 md:border-4 border-black font-black text-lg md:text-xl transition-all ${hearts===1 ? 'bg-brutal-yellow translate-y-1 shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
           >1</button>
           <button 
             onClick={() => { playClick(); setHearts(3); }} 
             className={`flex-1 py-1 md:py-2 border-2 md:border-4 border-black font-black text-lg md:text-xl transition-all ${hearts===3 ? 'bg-brutal-yellow translate-y-1 shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
           >3</button>
           <button 
             onClick={() => { playClick(); setHearts(5); }} 
             className={`flex-1 py-1 md:py-2 border-2 md:border-4 border-black font-black text-lg md:text-xl transition-all ${hearts===5 ? 'bg-brutal-yellow translate-y-1 shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
           >5</button>
           <button 
             onClick={() => { playClick(); setHearts(Infinity); }} 
             className={`flex-1 py-1 md:py-2 border-2 md:border-4 border-black font-black text-lg md:text-xl transition-all flex items-center justify-center ${hearts===Infinity ? 'bg-brutal-pink translate-y-1 shadow-none' : 'bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
           >
             <PixelInfinity className="w-6 h-6 md:w-8 md:h-8" color="currentColor" />
           </button>
        </div>
      </div>
      
      <button 
        className="btn-brutal btn-brutal-pink text-xl w-full max-w-sm flex items-center justify-center gap-2" 
        onClick={handleStart}
      >
        <span>Start Playing</span> <PixelRocket className="w-6 h-6" />
      </button>
    </div>
  );
};

export default StartScreen;
