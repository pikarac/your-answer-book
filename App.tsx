import React, { useState } from 'react';
import TheBook from './components/TheBook';
import StarBackground from './components/StarBackground';
import { AnswerData, AppState } from './types';
import { fetchBookAnswer } from './services/azureOpenAIService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [question, setQuestion] = useState('');
  const [answerData, setAnswerData] = useState<AnswerData | null>(null);
  const [showInterpretation, setShowInterpretation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setAppState(AppState.THINKING);

    try {
      const data = await fetchBookAnswer(question);
      setAnswerData(data);
      setAppState(AppState.FLIPPING);
      
      setTimeout(() => {
        setAppState(AppState.SHOWING_ANSWER);
      }, 1500); 
    } catch (error) {
      console.error("The Oracle is silent.", error);
      setAppState(AppState.IDLE);
    }
  };

  const handleInterpret = () => {
    setShowInterpretation(true);
  };

  const handleReset = () => {
    setAppState(AppState.IDLE);
    setTimeout(() => {
      setQuestion('');
      setAnswerData(null);
      setShowInterpretation(false);
    }, 1500);
  };

  const isBookOpen = appState === AppState.SHOWING_ANSWER || appState === AppState.FLIPPING;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4 overflow-hidden bg-mystic-950">
      <StarBackground />

      {/* Dynamic Magical Aura */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mystic-600/20 rounded-full blur-[120px] transition-all duration-[2000ms] pointer-events-none ${isBookOpen ? 'opacity-100 scale-125' : 'opacity-40 scale-100'}`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[80px] transition-all duration-[2000ms] pointer-events-none ${isBookOpen ? 'opacity-100 scale-150' : 'opacity-0 scale-50'}`}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl">
        
        {/* The 3D Book */}
        <TheBook 
          appState={appState}
          answerData={answerData}
          onInterpret={handleInterpret}
          showInterpretation={showInterpretation}
          onReset={handleReset}
          question={question}
        />

        {/* Ethereal Input Form */}
        <div 
          className={`w-full max-w-md transition-all duration-1000 transform ${
            appState === AppState.IDLE || appState === AppState.THINKING 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-20 scale-90 pointer-events-none'
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative group">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Seek your answer..."
                disabled={appState === AppState.THINKING}
                className="w-full bg-transparent border-b-2 border-mystic-700 text-gold-100 placeholder-mystic-400 py-4 px-2 focus:outline-none focus:border-gold-400/50 transition-all font-serif text-xl text-center"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 group-focus-within:w-full transition-all duration-700"></div>
            </div>
            
            <button
              type="submit"
              disabled={!question.trim() || appState === AppState.THINKING}
              className={`
                group relative px-10 py-4 overflow-hidden
                bg-mystic-900/40 border border-gold-500/20
                text-gold-200 font-display text-sm tracking-[0.4em] uppercase
                hover:border-gold-400/40 transition-all duration-700
                disabled:opacity-30 disabled:cursor-not-allowed
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
              <span className="relative z-10">
                {appState === AppState.THINKING ? 'Consulting the Void...' : 'Consult The Book'}
              </span>
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-4 mt-6 opacity-30">
            <div className="h-[1px] w-8 bg-gold-500/50"></div>
            <p className="text-gold-200 text-[10px] font-serif uppercase tracking-[0.3em]">
              Close your eyes & focus
            </p>
            <div className="h-[1px] w-8 bg-gold-500/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;