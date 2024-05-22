import css from './Feedback.module.css';

export default function Feedback({
  totalFeedback,
  positiveFeedback,
  feedback: { good, neutral, bad },
}) {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Positive: {positiveFeedback}%</li>
      <li>Total: {totalFeedback}</li>
    </ul>
  );
}
