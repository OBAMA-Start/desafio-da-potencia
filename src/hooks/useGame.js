import { useState, useEffect, useRef, useCallback } from 'react';
import { QUESTION_BANK, LEVELS, POINTS_PER_QUESTION, FEEDBACK_DELAY } from '../data/questions';

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Constroi a fila de perguntas. Com startKey, começa a partir de uma fase
// específica (usado no "tentar novamente a fase").
function buildQueue(startKey) {
  const result = [];
  let started = !startKey;
  for (const level of LEVELS) {
    if (level.key === startKey) started = true;
    if (!started) continue;
    const picked = shuffle(QUESTION_BANK[level.key]).slice(0, level.count);
    for (const item of picked) {
      result.push({ levelKey: level.key, levelName: level.name, ...item, options: shuffle(item.options) });
    }
  }
  return result;
}

export function useGame() {
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreAtLevelStart, setScoreAtLevelStart] = useState(0);
  const [status, setStatus] = useState('playing');
  const [selected, setSelected] = useState(null);
  const timer = useRef(null);

  const restart = useCallback(() => {
    clearTimeout(timer.current);
    setQueue(buildQueue());
    setCurrentIndex(0);
    setScore(0);
    setScoreAtLevelStart(0);
    setStatus('playing');
    setSelected(null);
  }, []);

  useEffect(() => {
    restart();
    return () => clearTimeout(timer.current);
  }, [restart]);

  // Recomeça apenas a fase atual, mantendo os pontos conquistados nas fases anteriores.
  const retryLevel = useCallback(() => {
    const current = queue[currentIndex];
    if (!current) return;
    clearTimeout(timer.current);
    setQueue(buildQueue(current.levelKey));
    setCurrentIndex(0);
    setScore(scoreAtLevelStart);
    setStatus('playing');
    setSelected(null);
  }, [queue, currentIndex, scoreAtLevelStart]);

  const handleAnswer = useCallback((option) => {
    if (status !== 'playing') return;
    const current = queue[currentIndex];
    if (!current || option !== current.answer) {
      setSelected(option);
      setStatus('incorrect');
      return;
    }
    setScore((s) => s + POINTS_PER_QUESTION);
    setStatus('correct');
    timer.current = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      const nextQuestion = queue[nextIndex];
      // Ao trocar de fase, guarda a pontuação do início da próxima fase
      // para o "tentar novamente a fase" manter os pontos já conquistados.
      if (nextQuestion && nextQuestion.levelKey !== current.levelKey) {
        setScoreAtLevelStart(score + POINTS_PER_QUESTION);
      }
      setCurrentIndex(nextIndex);
      setStatus('playing');
      setSelected(null);
    }, FEEDBACK_DELAY);
  }, [status, queue, currentIndex, score]);

  useEffect(() => {
    if (queue.length > 0 && currentIndex >= queue.length) {
      setStatus('over');
    }
  }, [currentIndex, queue.length]);

  const current = queue[currentIndex];
  const maxScore = queue.length * POINTS_PER_QUESTION;

  return { current, score, maxScore, status, selected, handleAnswer, restart, retryLevel };
}