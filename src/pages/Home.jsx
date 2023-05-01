import React, { useEffect, useState } from 'react';
import Profile from '../components/Home/Profile';
import LoginBtn from '../components/Login/LoginBtn';
import { logout } from '../config/firebase';
import LoginTitle from '../components/Login/LoginTitle';
import MyFiles from '../components/Home/MyFiles';
import { db, auth } from '../config/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../components/Loader';
import { boilerPlate } from '../constants/boilerPlate';

const defaultFile = {
  name: 'Untitled',
  code: [boilerPlate],
  language: 'cpp',
  date: new Date().toLocaleDateString(),
};

async function addNewFiles(ref) {
  await updateDoc(ref, {
    myFiles: [JSON.stringify(defaultFile)],
  });
}

function Home() {
  const [user] = useAuthState(auth);
  const uid = user?.uid;
  const [userData, setUserData] = useState({});
  const [firebaseUserId, setFirebaseUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // get firestoreUID and UserData
  useEffect(() => {
    const getUsers = async () => {
      const data = collection(db, 'users');
      const q = query(data, where('uid', '==', uid));
      const user = await getDocs(q);
      user.forEach((doc) => {
        setUserData(doc.data());
        setFirebaseUserId(doc.id);
      });
      setIsLoading(false);
    };
    getUsers();
  }, []);

  if (isLoading) return <Loader />;
  // document refference
  const docRef = doc(db, 'users', firebaseUserId);

  // add default file if new user
  if (!userData?.myFiles) {
    addNewFiles(docRef);
  }

  return (
    <div className="main">
      <div className="header" style={{ justifyContent: 'space-between' }}>
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
        <div
          className="wrapper"
          style={{
            width: '30%',
            marginRight: '1rem',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          <Profile />
          <LoginBtn
            text="Logout"
            styles={{
              backgroundColor: '#8F43EE',
              color: '#fff',
              fontWeight: '600',
              fontSize: '1rem',
            }}
            onClick={logout}
          />
        </div>
        <div
          className="wrapper card"
          style={{ width: '100%', height: '100%', flexDirection: 'column' }}
        >
          <div
            className="wrapper"
            style={{
              alignItems: 'start',
              justifyContent: 'start',
              flexDirection: 'column',
            }}
          >
            <LoginTitle title="Github Stats" />
            <div
              className="wrapper"
              style={{
                alignItems: 'start',
                justifyContent: 'start',
                objectFit: 'scale-down',
              }}
            >
              <img
                src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=Pargat-Dhanjal&theme=react&hide_border=true&include_all_commits=true&count_private=true"
                alt="Stat 1"
                className="stats"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Pargat-Dhanjal&theme=react&hide_border=true"
                alt="Stat 2"
                className="stats"
              />
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundColor: '#011627',
              height: '100%',
              width: '100%',
              alignItems: 'start',
              color: 'white',
              overflow: 'auto',
              flexDirection: 'column',
            }}
          >
            <h1>My Files</h1>
            <MyFiles myFiles={userData.myFiles} firebaseUserId={firebaseUserId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
