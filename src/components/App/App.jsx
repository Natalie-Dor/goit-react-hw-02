import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

// import css from './App.module.css';
import Notification from '../Notification/Notification';

const getFeedback = () => {
  const savedFeedback = localStorage.getItem('feedback');
  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }
  return { good: 0, neutral: 0, bad: 0 };
};
export default function App() {
  const [feedback, setFeedback] = useState(getFeedback);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        updateFeedback={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
