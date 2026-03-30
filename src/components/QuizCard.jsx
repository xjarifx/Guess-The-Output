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
      <h2 className="text-xl md:text-2xl font-bold mb-4 bg-black text-white inline-block px-3 py-1">
        What is the output?
      </h2>
      
      <div className="bg-gray-100 border-4 border-black p-4 md:p-6 mb-6 md:mb-8 font-code text-lg md:text-2xl font-bold shadow-brutal-sm overflow-x-auto">
        <code className="whitespace-pre-wrap break-words block min-w-full">{question.code}</code>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="btn-brutal btn-brutal-blue text-base md:text-lg !py-2 sm:!py-3"
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
