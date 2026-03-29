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
      <h2 className="text-5xl font-black mb-6 uppercase border-b-4 border-black pb-4 flex items-center justify-center gap-2">
        {isCorrect 
          ? <>Correct! <PixelParty className="w-10 h-10 text-white" color="currentColor" /></> 
          : <>Oops! <PixelOops className="w-10 h-10 text-white" color="currentColor" /></>}
      </h2>
      
      {!isCorrect && (
        <div className="bg-white border-4 border-black p-4 mb-6 font-bold text-xl inline-block transform rotate-1">
          You chose: <span className="text-red-600 line-through">{userAnswer}</span> <br/>
          Correct Answer: <span className="text-green-600">{correctAnswer}</span>
        </div>
      )}
      
      <div className="bg-white border-4 border-black p-6 mb-8 font-medium text-lg leading-relaxed shadow-brutal-sm text-left">
        <p>{explanation}</p>
      </div>
      
      <button 
        className={`btn-brutal text-xl w-full md:w-auto flex items-center justify-center gap-2 mx-auto md:mx-0 ${isGameOver ? 'btn-brutal-pink' : 'btn-brutal-yellow'}`} 
        onClick={handleNext}
      >
        {isGameOver ? <>Game Over <PixelSkull className="w-6 h-6" /></> : <>Next Question <PixelArrowRight className="w-6 h-6" /></>}
      </button>
    </div>
  );
};

export default ResultFeedback;
