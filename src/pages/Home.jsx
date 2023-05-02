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
import { languageOptions } from '../constants/languages';

const defaultFile = {
  name: 'HelloWorld',
  code: boilerPlate[4].value,
  language: JSON.stringify(languageOptions[0]),
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
  const [github, setGithub] = useState('');
  let docRef;

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
  }, [uid]);

  // document refference
  if (isLoading) return <Loader />;

  if (firebaseUserId) {
    docRef = doc(db, 'users', firebaseUserId);
  }

  // add default file if new user
  if (!userData?.myFiles) {
    addNewFiles(docRef);
  }
  if (!localStorage.getItem('myFiles') && !isLoading) {
    localStorage.setItem('myFiles', [JSON.stringify(userData?.myFiles)]);
  }

  return (
    <div className="main-display">
      <div className="header" style={{ justifyContent: 'space-between' }}>
        <img
          src="/logo.svg"
          alt="Logo"
          className="logo"
          style={{ margin: 'auto', height: '100%' }}
        />
      </div>
      <div className="wrapper wrapper-smol" style={{ padding: '1rem' }}>
        <div
          className="wrapper profile"
          style={{
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          <Profile github={github} setGithub={setGithub} logout={logout} />
        </div>
        <div
          className="wrapper card"
          style={{ width: '100%', height: '100%', flexDirection: 'column' }}
        >
          <div
            className="wrapper right-card"
            style={{
              flexDirection: 'column',
              height: 'auto',
              padding: '1rem',
            }}
          >
            <LoginTitle title="Github Stats" />
            <div className="wrapper github-stats">
              <img
                src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=${github}&theme=react&hide_border=true&include_all_commits=true&count_private=true`}
                alt="Stat 1"
                className="stats"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=react&hide_border=true`}
                alt="Stat 2"
                className="stats"
              />
            </div>
          </div>
          <div
            className="card right-card"
            style={{
              backgroundColor: '#011627',
              width: '100%',
              color: 'white',
              overflow: 'auto',
              flexDirection: 'column',
            }}
          >
            <LoginTitle title="My Files" />
            <MyFiles
              myFiles={userData.myFiles}
              firebaseUserId={firebaseUserId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
