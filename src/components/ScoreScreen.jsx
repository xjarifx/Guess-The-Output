import React, { useEffect } from 'react';
import { useQuizSounds } from '../hooks/useQuizSounds';
import { PixelWizard, PixelCool, PixelThink, PixelDizzy, PixelOops, PixelRefresh } from './PixelIcons';

const ScoreScreen = ({ survived, totalQuestions, onRestart }) => {
  const { playClick, playWin } = useQuizSounds();

  useEffect(() => {
    if (survived > 0) playWin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRestart = () => {
    playClick();
    onRestart();
  };

  const percentage = Math.round((survived / totalQuestions) * 100);
  
  let title = '';
  let EmojiComp = null;
  if (percentage === 100 || survived >= totalQuestions) {
    title = "JS Wizard";
    EmojiComp = PixelWizard;
  } else if (survived >= 20 || percentage >= 70) {
    title = "Senior Dev Level";
    EmojiComp = PixelCool;
  } else if (survived >= 5 || percentage >= 30) {
    title = "Junior Dev... getting there!";
    EmojiComp = PixelThink;
  } else {
    title = "Lost in the Event Loop";
    EmojiComp = PixelDizzy;
  }

  return (
    <div className="card-brutal bg-brutal-blue text-center animate-pop-brutal flex flex-col items-center">
      <div className="w-full flex-1 flex flex-col items-center justify-center overflow-y-auto px-0.5 sm:px-1">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-4 uppercase drop-shadow-md shrink-0">
          {survived >= totalQuestions ? 'Quiz Complete!' : 'Game Over!'}
        </h1>
        
        {/* Rank Title */}
        <h2 className="text-base sm:text-xl md:text-2xl font-bold bg-white inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 border-2 sm:border-3 border-black mb-4 sm:mb-8 transform rotate-1 shrink-0">
          {title} <EmojiComp className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0" color="currentColor" />
        </h2>
        
        {/* Score Circle */}
        <div className="bg-brutal-yellow border-2 sm:border-3 md:border-4 border-black p-4 sm:p-6 md:p-8 rounded-full w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-8 flex flex-col justify-center items-center shadow-brutal-sm sm:shadow-brutal transform -rotate-3 shrink-0">
          <div className="text-3xl sm:text-5xl md:text-6xl font-black">{survived}</div>
          <div className="text-xs sm:text-lg md:text-xl font-bold mt-1 sm:mt-2 border-t-2 sm:border-t-3 border-black pt-1 sm:pt-2 w-full leading-tight">Questions<br/>Survived</div>
        </div>
        
        {/* Footer Quip */}
        <p className="text-xs sm:text-lg md:text-xl font-bold mb-4 sm:mb-8 bg-black text-white px-2 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap shrink-0">
          Because JavaScript makes total sense... right? <PixelOops className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block text-brutal-pink shrink-0" />
        </p>

        {/* Play Again Button */}
        <button 
          className="btn-brutal btn-brutal-pink text-base sm:text-xl md:text-2xl w-full sm:w-auto flex items-center justify-center gap-2 shrink-0 mb-1" 
          onClick={handleRestart}
          id="play-again-button"
        >
          Play Again <PixelRefresh className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScoreScreen;
