import React from 'react';
import AuthBtn from './AuthBtn';
import LoginTitle from './LoginTitle';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import SwitchForm from './SwitchForm';

function LoginForm({ emailValue, emailOnChange, passOnChange, passValue , onSubmit , googleAuth, githubAuth}) {
  return (
    <div className="glass" style={{ color: 'rgba(255, 255, 255, 0.4)' , maxWidth:'25rem' }}>
      <LoginTitle title="Welcome Back" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          margin: '2rem 0',
        }}
      >
        <AuthBtn icon={<FcGoogle size={25} onClick={googleAuth} />} />
        <AuthBtn icon={<BsGithub size={25} style={{ fill: 'white' }} onClick={githubAuth} />} />
      </div>
      <p style={{ textAlign: 'center' }}>or</p>
      <LoginInput
        type="email"
        placeholder="Email address"
        value={emailValue}
        onChange={emailOnChange}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={passValue}
        onChange={passOnChange}
      />
      <LoginBtn text="Log in" onClick={onSubmit} />
      <SwitchForm text="Don’t have an account? Sign up here" />
    </div>
  );
}

export default LoginForm;
