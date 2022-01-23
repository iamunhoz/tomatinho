import React, {useEffect, useState} from "react"
import TimerDisplay from "./Display"
import Button from "./Button"
import Soundify from "utils/Soundify"

const POMODORO_LIMIT = 1500 // 25min * 60s

export default function Timer({ setTodaysPomodoros }) {
  const [seconds, setSeconds] = useState(0)
  const [intervalID, setIntervalID] = useState()
  const [startText, setStartText] = useState('Iniciar')

  const handleStart = () => {
    const _intervalID = setInterval(() => setSeconds(prev => prev + 1), 1000)
    setIntervalID(_intervalID)

  }
  const handleParar = () => {
    setStartText('Reiniciar')
    clearInterval(intervalID)
  }
  const handleReiniciar = () => {
    handleParar()
    setSeconds(0)
    handleStart()
  }

  const handleAcabar = () => {
    if (seconds >= POMODORO_LIMIT) {
      console.log('handleAcabared executed')
      setTodaysPomodoros(prev => prev + 1)
      handleParar()
    }
  }

  useEffect(handleAcabar, [seconds])

  return (
    <div>
      <TimerDisplay seconds={seconds}/>
      {seconds < POMODORO_LIMIT ?
        <>
          <Soundify type='success'/>

          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button
              onClick={handleReiniciar}
              label={startText}
              backColor='var(--green)'
            />
            <Button
              onClick={handleParar}
              label='Parar'
              backColor='var(--red)'
            />
          </div>
        </> 
        :
        <>
          <Soundify type='begin'/>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button
              onClick={handleReiniciar}
              label={'Começar de Novo'}
              backColor='var(--blue)'
              />
          </div>
        </>
      }
      
    </div>
  )
}