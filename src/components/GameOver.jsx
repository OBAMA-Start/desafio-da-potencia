export default function GameOver({ score, maxScore, onRestart }) {
  const percentage = maxScore === 0 ? 0 : (score / maxScore) * 100;

  let message;
  if (score === maxScore) {
    message = '✨ Gênio das potências! Você acertou tudo!';
  } else if (percentage >= 70) {
    message = '🎉 Muito bom! Você dominou bem as potências.';
  } else {
    message = '🔁 Continue praticando! Está no caminho certo!';
  }

  return (
    <main className="game" aria-live="polite">
      <div className="level">Fim de jogo</div>
      <div id="score">Pontuação final: {score} / {maxScore}</div>
      <div className="end-message">{message}</div>
      <button type="button" className="restart" onClick={onRestart}>Jogar novamente</button>
    </main>
  );
}
