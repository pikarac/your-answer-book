import React, { useState, useEffect } from 'react';
import { AnswerData, AppState } from '../types';
import MagicParticles from './MagicParticles';

interface TheBookProps {
  appState: AppState;
  answerData: AnswerData | null;
  onInterpret: () => void;
  showInterpretation: boolean;
  onReset: () => void;
  question?: string;
}

const TheBook: React.FC<TheBookProps> = ({ 
  appState, 
  answerData, 
  onInterpret, 
  showInterpretation,
  onReset,
}) => {
  const isOpen = appState === AppState.SHOWING_ANSWER || appState === AppState.FLIPPING;
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (appState === AppState.SHOWING_ANSWER) {
      const timer = setTimeout(() => setContentVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [appState]);

  return (
    <div className={`relative w-[320px] h-[440px] md:w-[440px] md:h-[580px] perspective-2000 z-10 transition-all duration-1000 ${isOpen ? 'animate-float' : ''}`}>
      {/* Magic Particles when open */}
      <MagicParticles active={isOpen && contentVisible} />

      {/* The Book Container */}
      <div className={`relative w-full h-full transform-style-3d transition-transform duration-[1500ms] ease-in-out ${isOpen ? 'translate-x-[50%]' : ''}`}>
        
        {/* FRONT COVER ASSEMBLY */}
        <div className={`absolute inset-0 w-full h-full origin-left transform-style-3d transition-transform duration-[1500ms] ease-in-out z-20 ${isOpen ? 'rotate-y-180' : ''}`}>
          
          {/* EXTERIOR COVER */}
          <div className="absolute inset-0 backface-hidden bg-mystic-900 rounded-r-lg rounded-l-sm border-[3px] border-mystic-800 book-shadow flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 filigree-pattern"></div>
            
            {/* Shimmer Light Sweep */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] animate-shimmer"></div>

            {/* Gold Borders with Filigree */}
            <div className="absolute inset-4 border border-gold-500/20 rounded-sm"></div>
            <div className="absolute inset-6 border-2 border-gold-400 rounded-sm flex flex-col items-center justify-center p-4 glow-border">
              {/* Corner Symbols */}
              <div className="absolute top-2 left-2 text-gold-400 text-3xl opacity-60">✧</div>
              <div className="absolute top-2 right-2 text-gold-400 text-3xl opacity-60">✧</div>
              <div className="absolute bottom-2 left-2 text-gold-400 text-3xl opacity-60">✧</div>
              <div className="absolute bottom-2 right-2 text-gold-400 text-3xl opacity-60">✧</div>

              {/* Shimmering Title - UPDATED TO 2 LINES & COOLER FONT */}
              <h1 className="font-display text-4xl md:text-5xl text-center font-black shiny-text animate-text-shine mb-8 tracking-[0.05em] leading-[1.1]">
                THE BOOK OF<br/>ANSWERS
              </h1>
              
              {/* Pulsing Crystal Gem */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute inset-2 border-2 border-gold-400 rotate-45 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 border border-gold-500/50 rounded-full scale-125"></div>
              </div>
              
              <p className="font-serif text-gold-200/40 text-[10px] tracking-[0.4em] uppercase">Arcanum • Veritas • Aeterna</p>
            </div>
          </div>

          {/* INTERIOR LEFT PAGE */}
          <div className="absolute inset-0 w-full h-full origin-left rotate-y-180 backface-hidden bg-paper-100 rounded-l-lg overflow-hidden paper-texture">
             <div className="absolute inset-0 page-edges-left pointer-events-none"></div>
             <div className="absolute top-0 bottom-0 right-0 w-20 spine-shadow-left pointer-events-none z-10"></div>

             <div className="h-full flex flex-col items-center justify-center p-10 select-none">
                <div className="w-full h-full border-[1px] border-paper-300 rounded-sm flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-32 h-32 border border-paper-800/10 rounded-full"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-paper-800/10 rounded-full"></div>

                    <div className="relative w-40 h-40 flex items-center justify-center">
                       <svg viewBox="0 0 100 100" className="absolute w-full h-full stroke-paper-900/20 fill-none animate-spin-slow">
                        <circle cx="50" cy="50" r="48" strokeWidth="0.2"/>
                        <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="2 4"/>
                        <path d="M50 0 L50 100 M0 50 L100 50" strokeWidth="0.2" />
                        <rect x="25" y="25" width="50" height="50" strokeWidth="0.2" transform="rotate(45 50 50)"/>
                      </svg>
                      <div className="text-4xl font-display text-gold-600/30">👁</div>
                    </div>
                    
                    <p className="mt-10 font-serif italic text-[11px] tracking-[0.2em] text-paper-900/40 text-center uppercase leading-loose">
                      The veil is thin,<br/>the spirit is wide.
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* BACK STATIC RIGHT PAGE */}
        <div className={`absolute inset-0 w-full h-full bg-paper-100 rounded-r-lg book-shadow flex flex-col paper-texture ${isOpen ? 'z-30' : 'z-10'}`}>
          <div className="absolute inset-0 page-edges-right pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 left-0 w-20 spine-shadow-right pointer-events-none z-20"></div>
          
          <div className="flex-1 p-10 md:p-14 flex flex-col items-center justify-center text-center relative z-10">
            <div className="absolute inset-8 border border-paper-900/5 pointer-events-none"></div>

            <div className={`flex flex-col h-full w-full items-center justify-center transition-all duration-[1500ms] ${contentVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-md'}`}>
              <div className="mb-auto mt-6 opacity-30">
                 <span className="text-paper-900 text-2xl tracking-[0.5em]">◇ ◇ ◇</span>
              </div>

              <div className="relative py-6 flex flex-col items-center">
                 <h2 className="font-serif text-3xl md:text-5xl text-paper-900 font-bold leading-tight drop-shadow-sm min-h-[4rem] px-4">
                  {answerData?.answer || "..."}
                 </h2>
                 <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mx-auto mt-8 mb-2"></div>
              </div>

              <div className={`w-full max-w-xs transition-all duration-1000 delay-500 ${showInterpretation ? 'opacity-100 max-h-[300px] mt-6 translate-y-0' : 'opacity-0 max-h-0 mt-0 translate-y-4 overflow-hidden'}`}>
                <div className="p-5 bg-white/30 backdrop-blur-[4px] rounded-lg shadow-inner border border-paper-900/5">
                  <p className="font-serif text-paper-800 italic text-xl leading-relaxed">
                    "{answerData?.interpretation || ""}"
                  </p>
                </div>
              </div>

              <div className="mt-auto mb-6 flex flex-col gap-5 items-center w-full">
                <div className={`transition-all duration-700 w-full flex justify-center ${showInterpretation ? 'opacity-0 pointer-events-none h-0 scale-95' : 'opacity-100 h-auto scale-100'}`}>
                  <button onClick={onInterpret} className="group relative overflow-hidden px-8 py-3 bg-paper-200/50 text-paper-900 hover:text-gold-700 transition-all duration-500 font-serif text-sm uppercase tracking-[0.3em] cursor-pointer w-full max-w-[240px] border border-paper-900/10">
                    <span className="relative z-10">Unveil Truth</span>
                    <div className="absolute inset-0 bg-gold-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </div>
                
                <button onClick={onReset} className="text-paper-900/40 hover:text-paper-900 transition-all duration-300 font-serif italic text-xs tracking-widest hover:underline decoration-1 underline-offset-8 cursor-pointer uppercase">
                  Seek Another Path
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SPINE EFFECT */}
        <div className="absolute top-0 bottom-0 left-0 w-[45px] bg-gradient-to-r from-mystic-950 via-mystic-800 to-mystic-950 transform -translate-x-full origin-right rotate-y-90 rounded-l-lg border-y border-mystic-800/50"></div>
      </div>
    </div>
  );
};

export default TheBook;