import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  wordsList: string[];
  glitchInterval?: number;
  glitchDuration?: number;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  wordsList,
  glitchInterval = 3000,
  glitchDuration = 200,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(wordsList[0] || '');

  // Random character generation for the glitch effect
  const generateRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Create a glitched version of text
  const createGlitchedText = (text: string) => {
    const glitchIntensity = Math.random() * 0.3 + 0.1; // 10-40% of characters will be glitched
    let result = '';

    for (let i = 0; i < text.length; i++) {
      if (Math.random() < glitchIntensity) {
        result += generateRandomChar();
      } else {
        result += text[i];
      }
    }

    return result;
  };

  // Word cycling effect
  useEffect(() => {
    const wordCycleInterval = setInterval(() => {
      // Start glitching
      setIsGlitching(true);

      // Multiple glitch frames
      let glitchFrames = 3;
      const glitchFrameInterval = setInterval(() => {
        setDisplayText(createGlitchedText(wordsList[currentWordIndex]));
        glitchFrames--;

        if (glitchFrames <= 0) {
          clearInterval(glitchFrameInterval);
        }
      }, glitchDuration / 3);

      // After glitching, show next word
      setTimeout(() => {
        const nextIndex = (currentWordIndex + 1) % wordsList.length;
        setCurrentWordIndex(nextIndex);
        setDisplayText(wordsList[nextIndex]);
        setIsGlitching(false);
      }, glitchDuration);

    }, glitchInterval);

    return () => {
      clearInterval(wordCycleInterval);
    };
  }, [currentWordIndex, glitchDuration, glitchInterval, wordsList]);

  return (
    <h1
      className={`${className} font-mono ${isGlitching ? 'glitching' : ''}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        ...(isGlitching ? {
          textShadow: '0.05em 0 0 rgba(255,0,0,.75), -0.025em -0.05em 0 rgba(0,255,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75)'
        } : {})
      }}
    >
      {displayText}
      <style>{`
        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
                        -0.025em -0.05em 0 rgba(0,255,0,.75),
                        0.025em 0.05em 0 rgba(0,0,255,.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
                        -0.025em -0.05em 0 rgba(0,255,0,.75),
                        0.025em 0.05em 0 rgba(0,0,255,.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
                        0.025em 0.025em 0 rgba(0,255,0,.75),
                        -0.05em -0.05em 0 rgba(0,0,255,.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
                        0.025em 0.025em 0 rgba(0,255,0,.75),
                        -0.05em -0.05em 0 rgba(0,0,255,.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
                        0.05em 0 0 rgba(0,255,0,.75),
                        0 -0.05em 0 rgba(0,0,255,.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
                        0.05em 0 0 rgba(0,255,0,.75),
                        0 -0.05em 0 rgba(0,0,255,.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255,0,0,.75),
                        -0.025em -0.025em 0 rgba(0,255,0,.75),
                        -0.025em -0.05em 0 rgba(0,0,255,.75);
          }
        }
        
        .glitching {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
        }
      `}</style>
    </h1>
  );
};

export default GlitchText;
