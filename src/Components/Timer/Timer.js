import React, { useEffect } from 'react'
import './Timer.scss'
import container from '../../hoc/container'


function Timer() {

  const [isStarted,setIsStarted] = React.useState(false)
  const [time,setTime] = React.useState(0)
  const [value,setValue] = React.useState(5)
  const [isPaused, setIsPaused] = React.useState(false)

  useEffect(
    () => {
      const interval = setInterval(
        ()=>{
          if(isStarted){
            setTime(time => time> 0.1 ? (time - 0.1).toFixed(1) : (0))
          }
          if (time == 0){
            setIsStarted(false)
          }
          
        }, 100
      )
      return (() => clearInterval(interval))
    },[isStarted,time]
  )

  const onChangeInput = (event) => {
    const newValue = event.target.value
    if (newValue.length <= 7 && !newValue.isNaN){
      setValue(newValue)
    }
  }

  const startTimer = () => {
    if(value != 0){
      setTime(value) 
      setIsStarted(true)
      setIsPaused(false)
    }
  }

  const stopTimer = () => {
    setTime(0)
    setIsPaused(false)
  }

  const pauseTimer = () => {
    setIsStarted(!isStarted)
    setIsPaused(false)
  }


  return (
    <div className='Timer'>
      <div className='container-timer'>

        <div className='title'>Timer</div>
        <div className='timer'>{time}</div>

        <div className='panel'>
          <div>
            <input
              className='input-timer' 
              type={'number'} 
              onChange = {event => onChangeInput(event)}
              value = {value}
              maxLength = {2}
            />
          </div>
        </div>

        <div className='buttons'>
            {
              !isPaused && time ?
                (
                 <button 
                    className='btn-pause' 
                    onClick={pauseTimer}
                  >{isStarted ? ('Pause') : ('Continue')}</button>
                )
                :
                (
                  <button onClick={startTimer}>Start</button>
                )
            }
            <button onClick={stopTimer}>Stop</button>
        </div>

      </div>
    </div>
  )
}

export default container(Timer, 'center')
