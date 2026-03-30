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
      <div className="w-full flex-1 flex flex-col items-center justify-center overflow-y-auto px-0.5 sm:px-1">
        {/* Result Header */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-6 uppercase border-b-2 sm:border-b-3 md:border-b-4 border-black pb-2 sm:pb-4 flex items-center justify-center gap-2 shrink-0">
          {isCorrect 
            ? <>Correct! <PixelParty className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white shrink-0" color="currentColor" /></> 
            : <>Oops! <PixelOops className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white shrink-0" color="currentColor" /></>}
        </h2>
        
        {/* Wrong Answer Comparison */}
        {!isCorrect && (
          <div className="bg-white border-2 sm:border-3 border-black p-2 sm:p-4 mb-3 sm:mb-6 font-bold text-sm sm:text-lg md:text-xl inline-block transform rotate-1 max-w-full overflow-hidden break-words text-left shrink-0">
            You chose: <span className="text-red-600 line-through">{userAnswer}</span> <br/>
            Correct: <span className="text-green-600 break-all">{correctAnswer}</span>
          </div>
        )}
        
        {/* Explanation */}
        <div className="bg-white border-2 sm:border-3 md:border-4 border-black p-3 sm:p-4 md:p-6 mb-4 sm:mb-8 font-medium text-sm sm:text-base md:text-lg leading-relaxed shadow-brutal-sm text-left shrink-0 w-full">
          <p>{explanation}</p>
        </div>
        
        {/* Next / Game Over Button */}
        <button 
          className={`btn-brutal text-base sm:text-lg md:text-xl w-full sm:w-auto flex items-center justify-center gap-2 mx-auto shrink-0 mb-1 ${isGameOver ? 'btn-brutal-pink' : 'btn-brutal-yellow'}`} 
          onClick={handleNext}
          id="next-button"
        >
          {isGameOver ? <>Game Over <PixelSkull className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /></> : <>Next Question <PixelArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /></>}
        </button>
      </div>
    </div>
  );
};

export default ResultFeedback;
