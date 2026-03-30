import React, { useEffect } from 'react';
import { useQuizSounds } from '../hooks/useQuizSounds';
import { PixelWizard, PixelCool, PixelThink, PixelDizzy, PixelOops, PixelRefresh } from './PixelIcons';

const ScoreScreen = ({ survived, totalQuestions, onRestart }) => {
  const { playClick, playWin } = useQuizSounds();

  useEffect(() => {
    // Only play win sound if they got more than 0
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
      <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase drop-shadow-md">
        {survived >= totalQuestions ? 'Quiz Complete!' : 'Game Over!'}
      </h1>
      
      <h2 className="text-xl md:text-2xl font-bold bg-white inline-flex flex-wrap items-center justify-center gap-2 px-3 md:px-4 py-1 md:py-2 border-2 md:border-4 border-black mb-6 md:mb-8 transform rotate-1">
        {title} <EmojiComp className="w-6 h-6 md:w-8 md:h-8 shrink-0" color="currentColor" />
      </h2>
      
      <div className="bg-brutal-yellow border-2 md:border-4 border-black p-6 md:p-8 rounded-full w-40 h-40 md:w-48 md:h-48 mb-6 md:mb-8 flex flex-col justify-center items-center shadow-brutal transform -rotate-3">
        <div className="text-5xl md:text-6xl font-black">{survived}</div>
        <div className="text-lg md:text-xl font-bold mt-2 border-t-2 md:border-t-4 border-black pt-2 w-full leading-tight">Questions<br/>Survived</div>
      </div>
      
      <p className="text-lg md:text-xl font-bold mb-6 md:mb-8 bg-black text-white px-3 py-2 md:px-4 flex items-center justify-center gap-2 flex-wrap">
        Because JavaScript makes total sense... right? <PixelOops className="w-5 h-5 md:w-6 md:h-6 inline-block text-brutal-pink shrink-0" />
      </p>

      <button 
        className="btn-brutal btn-brutal-pink text-xl md:text-2xl w-full md:w-auto flex items-center justify-center gap-2" 
        onClick={handleRestart}
      >
        Play Again <PixelRefresh className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default ScoreScreen;
