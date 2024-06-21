import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedbackValue, setFeedbackValue] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setFeedbackValue({
      ...feedbackValue,
      [feedbackType]: feedbackValue[feedbackType] + 1,
    });
  };

  const { good, neutral, bad } = feedbackValue;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / (good + bad)) * 100);

  const handleReset = () => {
    setFeedbackValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbackValue));
  }, [feedbackValue]);

  return (
    <div className={css.box}>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onReset={handleReset}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          value={feedbackValue}
          total={totalFeedback}
          positivePercent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
