import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import ResultFeedback from './components/ResultFeedback';
import ScoreScreen from './components/ScoreScreen';
import { PixelHeart, PixelCrown, PixelSkull, PixelSoundOn, PixelSoundOff, PixelHome, PixelInfinity, PixelHourglass } from './components/PixelIcons';
import { useQuizAPI } from './hooks/useQuizAPI';
import { useQuizSounds } from './hooks/useQuizSounds';

function App() {
  const { questions, loading, error, reshuffle } = useQuizAPI();
  const { isMuted, toggleMute, playClick } = useQuizSounds();
  const [gameState, setGameState] = useState('start'); // start, quiz, feedback, score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [survived, setSurvived] = useState(0);
  const [initialHearts, setInitialHearts] = useState(3);
  const [currentHearts, setCurrentHearts] = useState(3);
  const [userAnswer, setUserAnswer] = useState(null);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white border-4 border-black shadow-brutal p-8 text-2xl font-black animate-pulse flex items-center gap-3">
          LOADING JS WEIRDNESS... <PixelHourglass className="w-8 h-8" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-brutal-red text-white border-4 border-black p-8 shadow-brutal font-bold text-xl">
        Error loading questions: {error}
      </div>
    );
  }

  // Double check questions exist
  if (!questions || questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];

  const handleStart = (heartsConfig = 3) => {
    reshuffle();
    setInitialHearts(heartsConfig);
    setCurrentHearts(heartsConfig);
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setSurvived(0);
  };

  const handleAnswerSelect = (answer) => {
    setUserAnswer(answer);
    setGameState('feedback');
    if (answer === currentQuestion.correctAnswer) {
      setSurvived(s => s + 1);
    } else {
      setCurrentHearts(h => (h === Infinity ? Infinity : h - 1));
    }
  };

  const isGameOver = currentHearts <= 0 && initialHearts !== Infinity;

  const handleNext = () => {
    if (isGameOver) {
      setGameState('score');
    } else if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(i => i + 1);
      setGameState('quiz');
    } else {
      setGameState('score');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 relative">
      <button 
        onClick={() => { playClick(); toggleMute(); }}
        className={`fixed top-4 right-4 z-50 btn-brutal !py-2 !px-4 text-sm md:text-xl flex items-center gap-2 cursor-pointer shadow-brutal-sm hover:shadow-brutal ${isMuted ? 'bg-brutal-red text-white' : 'bg-white'}`}
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
      >
        {isMuted ? (
          <><PixelSoundOff className="w-6 h-6 inline-block fill-white" color="currentColor" /> MUTED</>
        ) : (
          <><PixelSoundOn className="w-6 h-6 inline-block" /> SOUND</>
        )}
      </button>

      {gameState !== 'start' && (
        <button 
          onClick={() => { playClick(); setGameState('start'); }}
          className="fixed top-4 left-4 z-50 btn-brutal btn-brutal-yellow !py-2 !px-4 text-sm md:text-xl flex items-center gap-2 cursor-pointer shadow-brutal-sm hover:shadow-brutal"
        >
          <PixelHome className="w-6 h-6 inline-block" /> QUIT
        </button>
      )}

      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      
      {gameState === 'quiz' && (
        <QuizCard 
          question={currentQuestion} 
          onAnswerSelect={handleAnswerSelect}
        />
      )}
      
      {gameState === 'feedback' && (
        <ResultFeedback 
          isCorrect={userAnswer === currentQuestion.correctAnswer}
          userAnswer={userAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          explanation={currentQuestion.explanation}
          isGameOver={isGameOver}
          onNext={handleNext}
        />
      )}

      {gameState === 'score' && (
        <ScoreScreen 
          survived={survived} 
          totalQuestions={questions.length} 
          onRestart={() => {
            reshuffle();
            setGameState('start');
          }} 
        />
      )}
      
      {gameState !== 'start' && gameState !== 'score' && (
        <div className="mt-8 flex justify-between items-center w-full max-w-2xl mx-auto space-x-4">
          <div className="font-bold text-lg bg-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-brutal-sm">
            Survived: {survived}
          </div>
          <div className="font-bold text-lg bg-white border-4 border-black px-4 py-2 transform rotate-1 shadow-brutal-sm min-w-[100px] text-center flex items-center justify-center gap-1 text-red-500">
            {initialHearts === Infinity 
              ? <><PixelCrown className="w-6 h-6 mr-1" color="#FACC15" /> <PixelInfinity className="w-8 h-8 text-black" color="currentColor" /></> 
              : (currentHearts > 0 
                  ? Array.from({ length: currentHearts }).map((_, i) => <PixelHeart key={i} className="w-5 h-5" color="currentColor" />)
                  : <PixelSkull className="w-5 h-5 text-black" color="currentColor" />)
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
