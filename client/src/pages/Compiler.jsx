import React from 'react';
import CodeEditor from '../components/CodeEditor';
import Terminal from '../components/Terminal';

function Compiler() {
  return (
    <div>
      <Header />
      <Card>
        <CodeEditor />
        <Terminal />
      </Card>
    </div>
  );
}

export default Compiler;
