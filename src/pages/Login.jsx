import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loader';

function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const [user, loading, error] = useAuthState(auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps


  if (loading || error) return <Loading />;
  else
    return (
      <div className="main" style={{ height: '100vh' }}>
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
            <img
              src="/snap.svg"
              alt="snapshot"
              style={{ width: '95%' }}
              className="snapshot"
            />
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
                emailValue={details.email}
                passValue={details.password}
                emailOnChange={handleChange}
                passOnChange={handleChange}
                onSubmit={(e) =>
                  logInWithEmailAndPassword(details.email, details.password)
                }
                googleAuth={() =>signInWithGoogle()}
                githubAuth={() =>signInWithGithub()}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
