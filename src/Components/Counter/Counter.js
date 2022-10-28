import React, {useState} from 'react'

import container from '../../hoc/container'

import './Counter.scss'


function Counter() {

  const [counter,setCounter] = useState(0)

  const incrementCounter = () => {
    if (counter < 2){
      setCounter(counter + 1)
    }
  }

  const decrementCounter = () => {
    if (counter > -2){
      setCounter(counter - 1)
    }
  }

  const minusClasses = ['minus', counter <= -2 ? 'disabled': '']
  const plusClasses = ['plus', counter  >= 2 ? 'disabled': '']

  return (
    <div className="Counter">
      <div>

        <h2 >Счетчик:</h2>
        <h1 onChange = {null} >{counter}</h1>

        <button 
          onClick={decrementCounter} 
          className={minusClasses.join(' ')}
        >- Минус</button>

        <button 
          onClick={incrementCounter} 
          className={plusClasses.join(' ')}
        >Плюс +</button>

      </div>
    </div>
  )
}

export default container(Counter, 'center')
