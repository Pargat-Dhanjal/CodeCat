import React, { useState } from 'react';
import { boilerPlate } from '../../constants/boilerPlate';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

async function addNewFiles(ref, files) {
  await updateDoc(ref, {
    myFiles: files,
  });
}

function MyFiles({ myFiles, firebaseUserId }) {
  const docRef = doc(db, 'users', firebaseUserId);
  const [files, setFiles] = useState(myFiles);
  const [add, setAdd] = useState(false);

  const handleAddDiv = (name) => {
    const newFile = JSON.stringify({
      name: [name],
      code: [boilerPlate],
      language: 'cpp',
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
          <div key={i} className="file">
            Name: {details.name}
            <p>Lang : {details.language}</p>
            <p className="file-date">Date: {details.date}</p>
          </div>
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
