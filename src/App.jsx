import { useState } from 'react'
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

import './App.css'

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    }
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);


    return (
      <div>
        <Description title={"Sip Happens Café"} text={"Please leave your feedback about our service by selecting one of the options below."} />
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    );
  }


