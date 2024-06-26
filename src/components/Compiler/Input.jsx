import React from 'react';

function Input({ input, setInput }) {
  return (
    <div className="input-tile">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Custom input`}
      ></textarea>
    </div>
  );
}

export default Input;
