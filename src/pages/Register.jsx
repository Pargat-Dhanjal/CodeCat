import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/Login/RegisterForm';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loader';

function Register() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [user, loading, error] = useAuthState(auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setDetails({
      ...details,
      [name]: value,
    });
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />;
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
              <RegisterForm
                emailValue={details.email}
                pass1Value={details.password1}
                nameValue={details.name}
                pass2Value={details.password2}
                handelChange={handleChange}
                onSubmit={(e) =>
                  registerWithEmailAndPassword(
                    details.name,
                    details.email,
                    details.password2
                  )
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

export default Register;
