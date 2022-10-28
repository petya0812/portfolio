import React from 'react'
import container from '../../hoc/container'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{marginTop:'30px',fontSize:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
      
      Page not found!
      
      <hr/>

      <Link className='btn btn-primary' to={'/'}>HOME PAGE</Link>
    </div>
  )
}

export default container(NotFound)
