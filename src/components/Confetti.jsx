import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const COLORS = ['#2ecc71', '#8e44ad', '#ffd700', '#00ffcc', '#f1c40f'];

// Chuva de confete pelas laterais da tela usando a biblioteca canvas-confetti.
// As partículas são lançadas mais rápido e têm vida curta (ticks baixo +
// gravidade alta), então desaparecem em pouco tempo.
export default function Confetti() {
  useEffect(() => {
    const duration = 700;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({
        particleCount: 15,
        spread: 50,
        startVelocity: 60,
        gravity: 1.2,
        ticks: 80,
        decay: 0.82,
        origin: { x: 0, y: 0.75 },
        colors: COLORS,
      });
      confetti({
        particleCount: 15,
        spread: 50,
        startVelocity: 60,
        gravity: 1.2,
        ticks: 80,
        decay: 0.82,
        origin: { x: 1, y: 0.75 },
        colors: COLORS,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return null;
}