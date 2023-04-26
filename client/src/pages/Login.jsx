import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/');
  }, [user, loading]);

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
      <div className="wrapper">
        <div className="wrapper left" style={{ padding: '1rem' }}>
          <img src="/snap.png" alt="snapshot" style={{ width: '95%' }} />
        </div>
        <div className="wrapper right" style={{ padding: '1rem' }}>
          <div>
            <LoginForm
              emailValue={email}
              passValue={pass}
              emailOnChange={(e) => setEmail(e.target.value)}
              passOnChange={(e) => setPass(e.target.value)}
              onSubmit={(e) => registerWithEmailAndPassword('pargat',email, pass)}
              googleAuth={signInWithGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
