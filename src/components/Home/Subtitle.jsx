import React from 'react';

function Subtitle({ text, icon }) {
  return <div style={{marginTop: '1rem', display: 'flex'}}>
    {icon}
    <h2 style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight : '400' , fontSize: '1.1rem', display : 'inline' , marginLeft: '0.5rem'}}>{text}</h2>
  </div>;
}

export default Subtitle;
