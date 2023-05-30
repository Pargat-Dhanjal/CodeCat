import React, { useEffect, useState } from 'react';
import { boilerPlate } from '../../constants/boilerPlate';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Link } from 'react-router-dom';
import { languageOptions } from '../../constants/languages';
import { AiFillDelete } from 'react-icons/ai';

async function addNewFiles(ref, files) {
  await updateDoc(ref, {
    myFiles: files,
  });
}

function MyFiles({ myFiles = [], firebaseUserId }) {
  const docRef = doc(db, 'users', firebaseUserId);
  const [files, setFiles] = useState(myFiles);
  const [add, setAdd] = useState(false);

  const handleAddDiv = (name) => {
    const newFile = JSON.stringify({
      name: name,
      code: boilerPlate[4].value,
      language: JSON.stringify(languageOptions[0]),
      date: new Date().toLocaleDateString(),
    });
    addNewFiles(docRef, [...files, newFile]);
    setFiles([...files, newFile]);
  };

  const handleDelete = (index) => {
    const newFiles = files.filter((file, i) => i !== index);
    addNewFiles(docRef, newFiles);
    setFiles(newFiles);
  };

  useEffect(() => {
    localStorage.setItem('myFiles', JSON.stringify(files));
  }, [files]);

  return (
    <div className="my-files">
      {files.map((file, i) => {
        const details = JSON.parse(file);
        return (
          <div className="file" key={i}>
            <Link
              to={`/${firebaseUserId}/${i}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div>
                <p>
                  Name: <span className="highlight">{details.name}</span>
                </p>
                <p style={{ marginTop: '0.3rem' }}>
                  Lang :{' '}
                  <span className="highlight">
                    {JSON.parse(details.language).value}
                  </span>
                </p>
              </div>
            </Link>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p className="file-date">Date:{details.date}</p>
              <button className="delete-btn" onClick={() => handleDelete(i)}>
                <AiFillDelete size={20} />
              </button>
            </div>
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
