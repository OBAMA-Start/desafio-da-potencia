export default function ScoreBoard({ level, score }) {
  return (
    <>
      <div className="level">Nível: {level}</div>
      <div id="score">Pontuação: {score}</div>
    </>
  );
}
