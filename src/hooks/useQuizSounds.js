import { useCallback, useState, useEffect } from 'react';

// Singleton context to prevent hitting browser AudioContext limits
let audioCtx = null;
let globalMuted = false;
const listeners = new Set();

export function useQuizSounds() {
  const [isMuted, setIsMuted] = useState(globalMuted);

  useEffect(() => {
    const listener = (muted) => setIsMuted(muted);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const toggleMute = useCallback(() => {
    globalMuted = !globalMuted;
    listeners.forEach((l) => l(globalMuted));
  }, []);

  const playTone = useCallback((frequency, type = 'sine', duration = 0.1) => {
    if (globalMuted) return;

    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      // Browsers suspend audio context if not initiated by a user gesture.
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch(e) {
      console.error("Audio Context error:", e);
    }
  }, []);

  const playClick = useCallback(() => playTone(600, 'sine', 0.1), [playTone]);
  
  const playCorrect = useCallback(() => {
    playTone(400, 'sine', 0.1);
    setTimeout(() => playTone(600, 'sine', 0.2), 100);
  }, [playTone]);
  
  const playWrong = useCallback(() => {
    playTone(300, 'sawtooth', 0.2);
    setTimeout(() => playTone(200, 'sawtooth', 0.4), 200);
  }, [playTone]);
  
  const playWin = useCallback(() => {
    playTone(400, 'sine', 0.1);
    setTimeout(() => playTone(500, 'sine', 0.1), 100);
    setTimeout(() => playTone(600, 'sine', 0.1), 200);
    setTimeout(() => playTone(800, 'sine', 0.4), 300);
  }, [playTone]);

  return { playClick, playCorrect, playWrong, playWin, isMuted, toggleMute };
}
