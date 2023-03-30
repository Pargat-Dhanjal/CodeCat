import React from 'react';
import Output from './Output';
import Input from './Input';

function Terminal({ output, input, setInput, handelCompile, processing }) {
  return (
    <div className="terminal">
      <Output output={output} handelCompile={handelCompile} processing={processing} />
      <Input input={input} setInput={setInput}  />
    </div>
  );
}

export default Terminal;
