import React from 'react'

function LoginInput({type , placeholder}) {
  return (
    <input className='login-input' type={type} placeholder={placeholder} />
  )
}

export default LoginInput