import React from 'react';

function LoginBtn({ text, onClick, styles }) {
  return (
    <button onClick={onClick} className="login-btn" style={styles}>
      {text}
    </button>
  );
}

export default LoginBtn;
