import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthChecker = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login');
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <img src="/Loading.svg" alt="..." className="loading" style={{
            height: '5rem',
        }} />
      </div>
    );
  else return <Outlet />;
};

export default AuthChecker;
