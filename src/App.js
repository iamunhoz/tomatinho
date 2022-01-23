import React, { useState } from "react";
import Timer from "components/Timer";
function App() {
  const [todaysPomodoros, setTodaysPomodoros] = useState(0)

  return (
  <main >
    <Timer setTodaysPomodoros={setTodaysPomodoros}/>
    <h2>{`Pomodoros completed today: ${todaysPomodoros}`}</h2>
  </main>    
  );
}

export default App;
