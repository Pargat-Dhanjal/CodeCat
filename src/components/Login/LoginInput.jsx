import React from 'react';

function LoginInput({ type, placeholder, value, onChange, name }) {
  return (
    <input
      className="login-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default LoginInput;
