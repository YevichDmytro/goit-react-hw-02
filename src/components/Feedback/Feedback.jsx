const Feedback = ({ value, total, positivePercent }) => {
  const { good, neutral, bad } = value;

  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {positivePercent ? positivePercent : 100}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
