export default function Options({ options, status, selected, onAnswer }) {
  const locked = status === 'correct';

  return (
    <div className="options">
      {options.map((option) => {
        const disabled = locked || (status === 'incorrect' && option === selected);
        return (
          <button key={option} type="button" disabled={disabled} onClick={() => onAnswer(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
}
