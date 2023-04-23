import React from 'react';
import InfoBox from '../components/Login/InfoBox';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: 'url(/bg-gradient.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#05010D',
      }}
    >
      <div className="header">
        <img
          src="/logo.svg"
          alt="Logo"
          className="logo"
          style={{ margin: 'auto', height: '5rem' }}
        />
      </div>
      <div className="wrapper">
        <div className="wrapper" style={{ flexDirection: 'column' }}>
          <InfoBox
            title="Introducing CodeCat-Online Compiler"
            text="Make something great."
            styles={{position: 'absolute', top: '15%'}}
          />
          <img
            src="/snap.png"
            alt="compiler"
            style={{
              position: 'absolute',
              width: '40rem',
              marginLeft: '10rem',
            }}
          />
          <InfoBox
            title="Build anything with zero setup"
            text="Instantly start and rapidly develop projects in any programming language "
            styles={{position: 'absolute', bottom: '10%', left: '20%'}}
          />
        </div>
        <div className="wrapper">
          <div style={{width : '60%', height: '80%'}}>
          <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
