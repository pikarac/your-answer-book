import React, { useEffect, useState, useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-mystic-950">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-mystic-900 via-mystic-950 to-black"></div>
      
      {/* Nebula Clouds */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-mystic-600/10 blur-[120px] animate-nebula"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] animate-nebula" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[100px] animate-nebula" style={{ animationDelay: '-10s' }}></div>

      {/* Shooting Star */}
      <div className="absolute top-1/4 right-0 w-[2px] h-[100px] bg-gradient-to-t from-white via-gold-200 to-transparent animate-shooting-star"></div>
      <div className="absolute top-1/2 left-full w-[1px] h-[80px] bg-gradient-to-t from-white via-mystic-300 to-transparent animate-shooting-star" style={{ animationDelay: '7s' }}></div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Center Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default StarBackground;