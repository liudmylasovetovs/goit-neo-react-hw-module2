import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

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
