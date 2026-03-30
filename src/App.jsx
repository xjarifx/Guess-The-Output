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
      <div className="flex flex-col items-center justify-center min-h-dvh p-4">
        <div className="bg-white border-3 sm:border-4 border-black shadow-brutal-sm sm:shadow-brutal p-4 sm:p-8 text-lg sm:text-2xl font-black animate-pulse flex items-center gap-2 sm:gap-3 text-center">
          LOADING JS WEIRDNESS... <PixelHourglass className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-brutal-red text-white border-3 sm:border-4 border-black p-4 sm:p-8 shadow-brutal font-bold text-lg sm:text-xl">
        Error loading questions: {error}
      </div>
    );
  }

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
    <div className="w-full min-h-dvh flex flex-col relative overflow-x-hidden">
      {/* ===== Decorative BG — xl only ===== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 hidden xl:block">
        <div className="absolute top-10 left-10 text-[12rem] font-black opacity-[0.04] transform -rotate-12 tracking-tighter">JS</div>
        <div className="absolute top-1/2 right-10 text-[8rem] font-black opacity-[0.04] transform rotate-12 tracking-widest whitespace-nowrap">{"{ } + [ ]"}</div>
        <div className="absolute bottom-10 left-1/4 text-[6rem] font-black opacity-[0.04] transform rotate-6 whitespace-nowrap">typeof NaN</div>
        <div className="absolute top-1/4 left-1/3 text-[20rem] font-black opacity-[0.02] transform -rotate-45">!</div>
        <div className="absolute bottom-1/4 right-1/4 text-[8rem] font-black opacity-[0.04] transform -rotate-12 tracking-tighter">()=&gt;</div>
        
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-brutal-pink border-8 border-black opacity-10 rounded-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-brutal-blue border-8 border-black opacity-10 rotate-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute top-20 right-1/4 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-transparent border-b-black opacity-10 rotate-45 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"></div>
      </div>

      {/* ===== Fixed Action Buttons ===== */}
      <button 
        onClick={() => { playClick(); toggleMute(); }}
        className={`fixed top-2 right-2 sm:top-4 sm:right-4 z-50 btn-brutal !py-1.5 !px-2.5 sm:!py-2 sm:!px-4 text-xs sm:text-base flex items-center gap-1 sm:gap-2 cursor-pointer ${isMuted ? 'bg-brutal-red text-white' : 'bg-white'}`}
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
        id="mute-toggle"
      >
        {isMuted ? (
          <><PixelSoundOff className="w-4 h-4 sm:w-5 sm:h-5 inline-block fill-white" color="currentColor" /> <span className="hidden sm:inline">MUTED</span></>
        ) : (
          <><PixelSoundOn className="w-4 h-4 sm:w-5 sm:h-5 inline-block" /> <span className="hidden sm:inline">SOUND</span></>
        )}
      </button>

      {gameState !== 'start' && (
        <button 
          onClick={() => { playClick(); setGameState('start'); }}
          className="fixed top-2 left-2 sm:top-4 sm:left-4 z-50 btn-brutal btn-brutal-yellow !py-1.5 !px-2.5 sm:!py-2 sm:!px-4 text-xs sm:text-base flex items-center gap-1 sm:gap-2 cursor-pointer"
          id="quit-button"
        >
          <PixelHome className="w-4 h-4 sm:w-5 sm:h-5 inline-block" /> <span className="hidden sm:inline">QUIT</span>
        </button>
      )}

      {/* ===== Main Content Area ===== */}
      <main className="flex-1 flex flex-col justify-center w-full max-w-3xl mx-auto px-3 py-3 sm:px-4 sm:py-6 md:px-8 md:py-8 relative z-10">
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
        
        {/* ===== HUD Bar ===== */}
        {gameState !== 'start' && gameState !== 'score' && (
          <div className="mt-3 sm:mt-6 flex justify-between items-center w-full max-w-2xl mx-auto gap-2">
            <div className="font-bold text-xs sm:text-base bg-white border-2 sm:border-3 border-black px-2 py-1 sm:px-4 sm:py-2 transform -rotate-1 shadow-brutal-sm" id="survived-counter">
              Survived: {survived}
            </div>
            <div className="font-bold text-xs sm:text-base bg-white border-2 sm:border-3 border-black px-2 py-1 sm:px-4 sm:py-2 transform rotate-1 shadow-brutal-sm min-w-[60px] sm:min-w-[100px] text-center flex items-center justify-center gap-1 text-red-500" id="hearts-display">
              {initialHearts === Infinity 
                ? <><PixelCrown className="w-4 h-4 sm:w-6 sm:h-6 mr-0.5" color="#FACC15" /> <PixelInfinity className="w-5 h-5 sm:w-8 sm:h-8 text-black" color="currentColor" /></> 
                : (currentHearts > 0 
                    ? Array.from({ length: currentHearts }).map((_, i) => <PixelHeart key={i} className="w-3.5 h-3.5 sm:w-5 sm:h-5" color="currentColor" />)
                    : <PixelSkull className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-black" color="currentColor" />)
              }
            </div>
          </div>
        )}
      </main>
    
      {/* ===== Marquee Footer ===== */}
      <div className="w-full shrink-0 bg-brutal-yellow border-t-3 sm:border-t-4 border-black text-black font-black text-sm sm:text-xl md:text-2xl py-1 sm:py-2 px-2 z-40 overflow-hidden whitespace-nowrap select-none pointer-events-none flex pb-safe" id="marquee-footer">
        <div className="animate-marquee flex items-center gap-4 sm:gap-10 whitespace-nowrap">
          <span>⚠️ WARNING: HIGH LEVELS OF CONTEXT LOSS DETECTED ⚠️</span>
          <span>///</span>
          <span>[] == ![] &rarr; true</span>
          <span>///</span>
          <span>typeof NaN &rarr; 'number'</span>
          <span>///</span>
          <span>0.1 + 0.2 !== 0.3</span>
          <span>///</span>
          <span>Math.max() &lt; Math.min()</span>
          <span>///</span>
          <span>"b" + "a" + + "a" + "a" &rarr; "baNaNa"</span>
          <span>///</span>
          
          <span>⚠️ WARNING: HIGH LEVELS OF CONTEXT LOSS DETECTED ⚠️</span>
          <span>///</span>
          <span>[] == ![] &rarr; true</span>
          <span>///</span>
          <span>typeof NaN &rarr; 'number'</span>
          <span>///</span>
          <span>0.1 + 0.2 !== 0.3</span>
          <span>///</span>
          <span>Math.max() &lt; Math.min()</span>
          <span>///</span>
          <span>"b" + "a" + + "a" + "a" &rarr; "baNaNa"</span>
          <span>///</span>
        </div>
      </div>
    
    </div>
  );
}

export default App;
