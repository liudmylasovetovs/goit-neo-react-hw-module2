import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";

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
