import React from 'react';

function InfoBox({ title, text , styles }) {
  return (
    <div className="box" style={styles} >
      <div className="inner-box">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default InfoBox;
