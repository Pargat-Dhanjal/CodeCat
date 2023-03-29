import React from 'react';
import Output from './Output';
import Input from './Input';

function Terminal({ output, input, setInput }) {
  return (
    <div className="terminal">
      <Output output={output} />
      <Input input={input} setInput={setInput} />
    </div>
  );
}

export default Terminal;
