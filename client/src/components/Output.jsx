import React from 'react';
import { decode } from 'base-64';

function Output({ output }) {
  return <pre className="output">{output ? decode(output.stdout) : ''}</pre>;
}

export default Output;
