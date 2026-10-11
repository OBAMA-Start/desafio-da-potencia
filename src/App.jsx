import { useState } from 'react';
import { useGame } from './hooks/useGame';
import ScoreBoard from './components/ScoreBoard';
import QuestionCard from './components/QuestionCard';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Confetti from './components/Confetti';
import GameOver from './components/GameOver';
import Menu from './components/Menu';
import Credits from './components/Credits';
import Footer from './components/Footer';

export default function App() {
  const [screen, setScreen] = useState('menu');
  const { current, score, maxScore, status, selected, handleAnswer, restart, retryLevel } = useGame();

  if (screen === 'menu') {
    return (
      <div className="screen-wrapper">
        <Menu onStart={() => setScreen('game')} onShowCredits={() => setScreen('credits')} />
        <Footer />
      </div>
    );
  }

  if (screen === 'credits') {
    return (
      <div className="screen-wrapper">
        <Credits onBack={() => setScreen('menu')} />
        <Footer />
      </div>
    );
  }

  if (!current) {
    return (
      <div className="screen-wrapper">
        <main className="game"><div className="question">Carregando pergunta...</div></main>
        <Footer />
      </div>
    );
  }

  if (status === 'over') {
    return (
      <div className="screen-wrapper">
        <GameOver score={score} maxScore={maxScore} onRestart={restart} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="screen-wrapper">
      {status === 'correct' && <Confetti />}
      <main className="game" aria-live="polite">
        <ScoreBoard level={current.levelName} score={score} />
        <QuestionCard text={current.question} />
        {status === 'incorrect' ? (
          <div className="game-actions">
            <button type="button" className="retry-level" onClick={retryLevel}>
              Tentar novamente a fase
            </button>
            <button type="button" className="restart" onClick={restart}>
              Recomeçar do zero
            </button>
          </div>
        ) : (
          <Options
            options={current.options}
            status={status}
            selected={selected}
            onAnswer={handleAnswer}
          />
        )}
        <Feedback status={status} />
      </main>
      <Footer />
    </div>
  );
}
