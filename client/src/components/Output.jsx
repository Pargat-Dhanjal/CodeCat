import React from 'react';
import { decode } from 'base-64';

function Output({ output }) {
  return <div className='output'>
    <h3>Output</h3>
    <button>Run</button>
    <pre className="output-terminal">{output ? decode(output.stdout) : ''}</pre>
  </div>;
}

export default Output;
