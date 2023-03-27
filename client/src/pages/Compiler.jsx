import React from 'react';
import CodeEditor from '../components/CodeEditor';
import Terminal from '../components/Terminal';

function Compiler() {
  return (
    <div>
        <CodeEditor />
        <Terminal />
    </div>
  );
}

export default Compiler;
