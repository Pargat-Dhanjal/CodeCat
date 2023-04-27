import React, { useEffect, useState } from 'react';
import AuthBtn from './AuthBtn';
import LoginTitle from './LoginTitle';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import SwitchForm from './SwitchForm';

function RegisterForm({
  emailValue,
  handelChange,
  pass1Value,
  onSubmit,
  googleAuth,
  githubAuth,
  nameValue,
  pass2Value,
}) {
  const [valid, setvalid] = useState();

  useEffect(() => {
    setvalid(false);
    if (pass1Value === pass2Value) {
      setvalid(true);
    }
  }, [pass1Value, pass2Value]);

  return (
    <div
      className="glass"
      style={{ color: 'rgba(255, 255, 255, 0.4)', maxWidth: '25rem' }}
    >
      <LoginTitle title="Let's Register" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          margin: '2rem 0',
        }}
      >
        <AuthBtn icon={<FcGoogle size={25} onClick={googleAuth} />} />
        <AuthBtn
          icon={
            <BsGithub
              size={25}
              style={{ fill: 'white' }}
              onClick={githubAuth}
            />
          }
        />
      </div>
      <p style={{ textAlign: 'center' }}>or</p>
      <LoginInput
        type="text"
        placeholder="Name"
        name="name"
        value={nameValue}
        onChange={handelChange}
      />
      <LoginInput
        type="email"
        name="email"
        placeholder="Email address"
        value={emailValue}
        onChange={handelChange}
      />
      <LoginInput
        type="password"
        name="password1"
        placeholder="Enter Password"
        value={pass1Value}
        onChange={handelChange}
      />
      <LoginInput
        type="password"
        name="password2"
        placeholder="Confirm Password"
        value={pass2Value}
        onChange={handelChange}
      />
      <LoginBtn text="Register" onClick={(valid) => onSubmit()} />
      <SwitchForm text="Have an account? Log in here" to="/login" />
    </div>
  );
}

export default RegisterForm;
