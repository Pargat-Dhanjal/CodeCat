import React, { useState } from 'react';
import { boilerPlate } from '../../constants/boilerPlate';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Link } from 'react-router-dom';
import { languageOptions } from '../../constants/languages';

async function addNewFiles(ref, files) {
  await updateDoc(ref, {
    myFiles: files,
  });
  localStorage.setItem('myFiles', JSON.stringify(files));
}

function MyFiles({ myFiles, firebaseUserId }) {
  const docRef = doc(db, 'users', firebaseUserId);
  const [files, setFiles] = useState(myFiles);
  const [add, setAdd] = useState(false);

  const handleAddDiv = (name) => {
    const newFile = JSON.stringify({
      name: [name],
      code: boilerPlate[4].value,
      language: (JSON.stringify(languageOptions[0])),
      date: new Date().toLocaleDateString(),
    });
    addNewFiles(docRef, [...files, newFile]);
    setFiles([...files, newFile]);
  };

  return (
    <div className="my-files">
      {files.map((file, i) => {
        const details = JSON.parse(file);
        return (
          <Link to={`/${firebaseUserId}/${i}`} key={i} style={{ textDecoration: 'none' }}>
            <div className="file">
              Name: {details.name}
              <p>Lang : {details.language.value}</p>
              <p className="file-date">Date: {details.date}</p>
            </div>
          </Link>
        );
      })}
      <div className="add">
        <input
          type="text"
          placeholder="Enter name"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              handleAddDiv(e.target.value);
              e.target.value = '';
              setAdd(false);
            }
          }}
          className="file"
          style={{ display: add ? 'block' : 'none' }}
        />
        <button className="add-btn" onClick={() => setAdd(true)}>
          +
        </button>
      </div>
    </div>
  );
}

export default MyFiles;
