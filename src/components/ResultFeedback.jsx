import React, { useEffect } from 'react';
import { useQuizSounds } from '../hooks/useQuizSounds';
import { PixelSkull, PixelArrowRight, PixelParty, PixelOops } from './PixelIcons';

const ResultFeedback = ({ 
  isCorrect, 
  userAnswer, 
  correctAnswer, 
  explanation, 
  isGameOver,
  onNext 
}) => {
  const { playClick, playCorrect, playWrong } = useQuizSounds();

  useEffect(() => {
    if (isCorrect) playCorrect();
    else playWrong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCorrect]);

  const handleNext = () => {
    playClick();
    onNext();
  };

  const bgColor = isCorrect ? 'bg-brutal-green' : 'bg-brutal-red';
  const shakeClass = !isCorrect ? 'animate-shake-brutal' : '';

  return (
    <div className={`card-brutal text-center ${bgColor} ${shakeClass}`}>
      <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 uppercase border-b-2 md:border-b-4 border-black pb-2 md:pb-4 flex items-center justify-center gap-2">
        {isCorrect 
          ? <>Correct! <PixelParty className="w-8 h-8 md:w-10 md:h-10 text-white shrink-0" color="currentColor" /></> 
          : <>Oops! <PixelOops className="w-8 h-8 md:w-10 md:h-10 text-white shrink-0" color="currentColor" /></>}
      </h2>
      
      {!isCorrect && (
        <div className="bg-white border-2 md:border-4 border-black p-3 md:p-4 mb-4 md:mb-6 font-bold text-base md:text-xl inline-block transform rotate-1 max-w-full overflow-hidden break-words text-left">
          You chose: <span className="text-red-600 line-through">{userAnswer}</span> <br/>
          Correct: <span className="text-green-600 break-all">{correctAnswer}</span>
        </div>
      )}
      
      <div className="bg-white border-2 md:border-4 border-black p-4 md:p-6 mb-6 md:mb-8 font-medium text-base md:text-lg leading-relaxed shadow-brutal-sm text-left">
        <p>{explanation}</p>
      </div>
      
      <button 
        className={`btn-brutal text-lg md:text-xl w-full md:w-auto flex items-center justify-center gap-2 mx-auto md:mx-0 ${isGameOver ? 'btn-brutal-pink' : 'btn-brutal-yellow'}`} 
        onClick={handleNext}
      >
        {isGameOver ? <>Game Over <PixelSkull className="w-5 h-5 md:w-6 md:h-6" /></> : <>Next Question <PixelArrowRight className="w-5 h-5 md:w-6 md:h-6" /></>}
      </button>
    </div>
  );
};

export default ResultFeedback;
