import css from './Options.module.css';

export default function Options({
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  return (
    <div className={css.buttons}>
      <button onClick={() => updateFeedback('good')} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
