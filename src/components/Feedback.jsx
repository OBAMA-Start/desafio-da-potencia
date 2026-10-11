const FEEDBACK = {
  correct: { text: '✅ Correto!', className: 'feedback correct' },
  incorrect: { text: '❌ Errado! Escolha como continuar:', className: 'feedback incorrect' },
};

export default function Feedback({ status }) {
  const data = FEEDBACK[status] || { text: '', className: 'feedback' };
  return <div className={data.className} role="status">{data.text}</div>;
}
