import React from 'react';
import AuthBtn from './AuthBtn';
import LoginTitle from './LoginTitle';

function LoginForm() {
  return (
    <div className="glass">
      <LoginTitle title='Welcome Back' />
      <AuthBtn />
      <AuthBtn />
      <h2 style={{ textAlign: 'center' }}>or</h2>
      {/* <LoginBtn /> */}
      {/* <SwitchForms /> */}
    </div>
  );
}

export default LoginForm;
