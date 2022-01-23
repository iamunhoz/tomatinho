import { StyledSection } from "./InfoBar.style";

export default function InfoBar({todaysPomodoros}) {
  return (
    <StyledSection>
      <h2>{`Pomodoros completed today:`}</h2>
      <h2>{`${todaysPomodoros}`}</h2>
    </StyledSection>
  )
}