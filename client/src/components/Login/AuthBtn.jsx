import React from 'react'
import { Link } from 'react-router-dom'

function AuthBtn({icon}) {
  return (
    <div style={{display : 'inline'}}>
      <Link to='/login' >
      <button className='auth-btn' >
        {icon}
      </button>
    </Link>
    </div>
  )
}

export default AuthBtn