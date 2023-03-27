import React from 'react';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handelChange = (value) => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="90vh"
        width="70vw"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// type your code..."
        value={code}
        onChange={handelChange}
      />
    </div>
  );
}

export default CodeEditor;
