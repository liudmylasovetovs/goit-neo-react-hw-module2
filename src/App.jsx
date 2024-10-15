import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem("feedbackState");
    if (savedState) {
      return JSON.parse(savedState);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackState", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setState({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem("feedbackState");
      return;
    }
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    return;
  };
  const totalFeedback = state.good + state.neutral + state.bad;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          state={state}
          totalFeedback={totalFeedback}
          positiveFeedback={Math.round((state.good / totalFeedback) * 100)}
        />
      )}
    </div>
  );
};

export default App;
