import React from 'react'

function LoginBtn({text , onClick}) {
  return (
    <button onClick={onClick} className='login-btn'>
        {text}
    </button>
  )
}

export default LoginBtn