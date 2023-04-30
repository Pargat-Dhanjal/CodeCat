import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase.js';
import LoginBtn from '../Login/LoginBtn.jsx';
import LoginTitle from '../Login/LoginTitle.jsx';
import Subtitle from './Subtitle.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsGithub } from 'react-icons/bs';


function Profile() {
  const [user, loading] = useAuthState(auth);
  const username = user?.displayName;
  const profilePic = user?.photoURL;
  const email = user?.email;
  const uid = user?.providerData[0]?.uid;
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUserDetails() {
      setIsLoading(true);
      try {
        let response = await fetch(`https://api.github.com/user/${uid}`);
        let responseJson = await response.json();
        setUserDetails(responseJson);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchUserDetails();
  }, [uid]);

  return (
    <div className="profile-card">
      <img src={profilePic} alt="Profile Pic" className="profile-pic" />
      <LoginTitle title={username} />
      <Subtitle text={email} />
      {isLoading ? (
        <p>Loading user details...</p>
      ) : (
        <>
          <Subtitle
            text={userDetails ? userDetails.login : 'None'}
            icon={<BsGithub size={20} />}
          />
        </>
      )}
      <LoginBtn text="Edit Profile" />
    </div>
  );
}

export default Profile;
