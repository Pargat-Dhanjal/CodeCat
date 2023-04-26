import React from 'react'

function AuthBtn({icon , onClick}) {
  return (
    <div style={{display : 'inline'}}>
      <button className='auth-btn' onClick={onClick} >
        {icon}
      </button>
    </div>
  )
}

export default AuthBtn