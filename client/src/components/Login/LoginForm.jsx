import React from 'react';
import AuthBtn from './AuthBtn';
import LoginTitle from './LoginTitle';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import SwitchForm from './SwitchForm';

function LoginForm() {
  return (
    <form className="glass" style={{color: 'rgba(255, 255, 255, 0.4)'}}>
      <LoginTitle title="Welcome Back" />
      <div style={{width: '100%', display : 'flex' , justifyContent : 'space-around' , margin : '2rem 0'}}>
        <AuthBtn icon={<FcGoogle size={25} />} />
        <AuthBtn icon={<BsGithub size={25} style={{fill : 'white'}} />} />
      </div>
      <p style={{ textAlign: 'center' }}>or</p>
      <LoginInput type='email' placeholder='Email address' />
      <LoginInput type='password' placeholder='Password' />
      <LoginBtn text='Log in' onClick={() => console.log('Log-in')} />
      <SwitchForm text='Don’t have an account? Sign up here' />
    </form>
  );
}

export default LoginForm;
