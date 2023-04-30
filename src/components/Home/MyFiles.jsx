import React, { useState } from 'react';

function MyFiles() {
  const [names, setNames] = useState([]);
  const [add, setAdd] = useState(false);

  const handleAddDiv = (name) => {
    const newDiv = <p> Name: {name}</p>;
    setNames([...names, newDiv]);
  };

  return (
    <div className="my-files">
      {/* Map over names */}
      {names.map((name, i) => (
        <div key={i} className="file">
            {name}
            <p className='file-date'>1st May, 2023</p>
        </div>
      ))}
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
