import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Description />
      <Options count={count} setCount={setCount} />
      <Feedback count={count} />
      <Notification />
    </div>
  )
}
  export default App
