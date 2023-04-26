import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from '../config/firebase';
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
    <div className="main" style={{height : '100vh'}}>
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
          <img src="/snap.svg" alt="snapshot" style={{ width: '95%' }} />
        </div>
        <div
          className="wrapper right"
          style={{
            padding: '1rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <div>
            <LoginForm
              emailValue={email}
              passValue={pass}
              emailOnChange={(e) => setEmail(e.target.value)}
              passOnChange={(e) => setPass(e.target.value)}
              onSubmit={(e) =>
                registerWithEmailAndPassword('pargat', email, pass)
              }
              googleAuth={signInWithGoogle}
              githubAuth={signInWithGithub}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
