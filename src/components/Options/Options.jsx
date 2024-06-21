import css from './Options.module.css';

const Options = ({ onUpdateFeedback, total, onReset }) => {
  return (
    <ul className={css.btnList}>
      <li>
        <button onClick={() => onUpdateFeedback('good')} className={css.button}>
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdateFeedback('neutral')}
          className={css.button}
        >
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => onUpdateFeedback('bad')} className={css.button}>
          Bad
        </button>
      </li>
      {total ? (
        <li>
          <button onClick={onReset} className={css.resetBtn}>
            Reset
          </button>
        </li>
      ) : (
        false
      )}
    </ul>
  );
};

export default Options;
