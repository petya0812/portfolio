import React from 'react'
import { NavLink } from 'react-router-dom'

const Start = () => {
  return (
    <div className='Start'>
      <h1>Начать опрос</h1>
      <NavLink to='/form/first' className='mui-btn mui-btn--primary'>Начать</NavLink>
    </div>
  )
}

export default Start
 