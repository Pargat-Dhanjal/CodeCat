import React from 'react'

function LoginInput({type , placeholder,value,onChange}) {
  return (
    <input className='login-input' type={type} placeholder={placeholder} value={value}  onChange={onChange} />
  )
}

export default LoginInput