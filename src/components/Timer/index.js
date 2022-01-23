import React, {useEffect, useState} from "react"
import TimerDisplay from "./Display"
import Button from "./Button"
import Soundify from "utils/Soundify"

const POMODORO_LIMIT = 1500 // 25min * 60s

export default function Timer({ setTodaysPomodoros }) {
  const [seconds, setSeconds] = useState(1490)
  const [intervalID, setIntervalID] = useState()
  const [startText, setStartText] = useState('Iniciar')
  const startTimer = () => {
    const _intervalID = setInterval(() => setSeconds(prev => prev + 1), 1000)
    setIntervalID(_intervalID)

  }
  const handleParar = () => {
    setStartText('Reiniciar')
    clearInterval(intervalID)
  }
  const handleReset = () => {
    handleParar()
    setSeconds(1490)
    startTimer()
  }

  const handleFinish = () => {
    if (seconds >= POMODORO_LIMIT) {
      console.log('handlefinished executed')
      setTodaysPomodoros(prev => prev + 1)
      handleParar()
    }
  }

  useEffect(handleFinish, [seconds])

  return (
    <>
      {seconds < POMODORO_LIMIT ?
        <>
          <Soundify type='success'/>

          <TimerDisplay seconds={seconds}/>
          <Button
            onClick={handleReset}
            label={startText}
            backColor='var(--green)'
            frontColor='var(--lightgreen)'
          />
          <Button
            onClick={handleParar}
            label='Parar'
            backColor='red'
            frontColor='#AAAAAA'
          />
        </> 
        :
        <>
          <Soundify type='begin'/>
          <h2>Time to Rest</h2>
          <Button
            onClick={handleReset}
            label={'Começar de Novo'}
            backColor='var(--green)'
            frontColor='var(--lightgreen)'
          />
        </>
      }
      
    </>
  )
}