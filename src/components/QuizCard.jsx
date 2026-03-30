import React from 'react';
import { useQuizSounds } from '../hooks/useQuizSounds';

const QuizCard = ({ question, onAnswerSelect }) => {
  const { playClick } = useQuizSounds();

  const handleSelect = (option) => {
    playClick();
    onAnswerSelect(option);
  };

  return (
    <div className="card-brutal bg-white animate-pop-brutal" key={question.id}>
      <div className="w-full flex-1 flex flex-col overflow-y-auto px-0.5 sm:px-1">
        {/* Header tag */}
        <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 bg-black text-white inline-block px-2 py-0.5 sm:px-3 sm:py-1 self-start shrink-0">
          What is the output?
        </h2>
        
        {/* Code Block */}
        <div className="bg-gray-100 border-2 sm:border-3 md:border-4 border-black p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 font-code text-sm sm:text-lg md:text-2xl font-bold shadow-brutal-sm overflow-x-auto shrink-0">
          <code className="whitespace-pre-wrap break-words block min-w-full">{question.code}</code>
        </div>
        
        {/* Answer Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="btn-brutal btn-brutal-blue text-sm sm:text-base md:text-lg !py-2 sm:!py-3"
              onClick={() => handleSelect(option)}
              id={`answer-option-${index}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
