import { StyleWrapper } from "./Display.style"

export default function TimerDisplay({seconds}) {
  const readableNumber = (number) => number.toString().length > 1 ? number : `0${number}`
  const minutes = Math.floor(seconds / 60)
  const parsedSeconds = seconds - (60 * minutes)

 
  return (
    <StyleWrapper>
      <span>{readableNumber(minutes)}</span>
      <span>:</span>
      <span>{readableNumber(parsedSeconds)}</span>
    </StyleWrapper>
  )
}