import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthChecker = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Outlet />;
};

export default AuthChecker;
