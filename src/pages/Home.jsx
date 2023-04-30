import React from 'react';
import Profile from '../components/Home/Profile';

function Home() {
  return (
    <div className="main">
      <div className="header">
        <img
          src="/logo.svg"
          alt="Logo"
          className="logo"
          style={{ margin: 'auto', height: '100%' }}
        />
      </div>
      <div
        className="wrapper"
        style={{ flexDirection: 'row', padding: '1rem' }}
      >
        <div className="wrapper" style={{ width: '30%' , marginRight :'1rem'}}>
          <Profile />
        </div>
        <div
          className="wrapper card"
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
