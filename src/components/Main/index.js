import React, { useState } from "react";
import Timer from "components/Timer";
import { StyledMain } from "./Main.style";
import InfoBar from "components/InfoBar";

export default function Main() {
  const [todaysPomodoros, setTodaysPomodoros] = useState(0)

  return (
  <StyledMain>
    <Timer setTodaysPomodoros={setTodaysPomodoros}/>
    <InfoBar todaysPomodoros={todaysPomodoros}/>
  </StyledMain>    
  );
}