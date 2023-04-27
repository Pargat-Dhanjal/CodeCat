import React from 'react';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <img
        src="/Loading.svg"
        alt="..."
        className="loading"
        style={{
          height: '5rem',
        }}
      />
    </div>
  );
}

export default Loader;
