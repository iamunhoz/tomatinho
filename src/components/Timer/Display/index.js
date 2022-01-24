import { StyleWrapper } from "./Display.style"
import { Helmet } from "react-helmet"

export default function TimerDisplay({seconds}) {
  const readableNumber = (number) => number.toString().length > 1 ? number : `0${number}`
  const minutes = Math.floor(seconds / 60)
  const parsedSeconds = seconds - (60 * minutes)
  const displayString = `${readableNumber(minutes)}:${readableNumber(parsedSeconds)}`

  return (
    <StyleWrapper>
      <Helmet defer={false}>
        <title>{displayString}</title>
      </Helmet>
      {displayString}
    </StyleWrapper>
  )
}