import React from 'react';
import { useState } from 'react';
import Editor, { loader } from '@monaco-editor/react';

function CodeEditor({ theme }) {
  const [code, setCode] = useState('');

  const handelChange = (value) => {
    setCode(value);
  };

  loader.init().then((monaco) => {
    monaco.editor.defineTheme('dark', theme);
  });

  return (
    <div className='code-editor'>
      <Editor
        height='100%'
        width='100%'
        theme='dark'
        defaultLanguage="javascript"
        defaultValue="// type your code...fr3uir3h3ruib3rv"
        value={code}
        onChange={handelChange}
      />
    </div>
  );
}

export default CodeEditor;
