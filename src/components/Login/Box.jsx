import React from 'react';

function Box({ title, content, src }) {
  return (
    <div className="box">
      <div className="box-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img src={src} alt="demo" className='snpashot' />
    </div>
  );
}

export default Box;
