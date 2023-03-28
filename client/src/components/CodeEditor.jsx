import React from 'react';
import { useState } from 'react';
import Editor, { loader } from '@monaco-editor/react';

function CodeEditor({ theme , language , code, handelChange}) {


  loader.init().then((monaco) => {
    monaco.editor.defineTheme('dark', theme);
  });

  console.log(language);

  return (
    <div className='code-editor'>
      <Editor
        height='100%'
        width='100%'
        theme='dark'
        language={language || 'java'}
        defaultValue="//Write your code here..."
        value={code}
        onChange={handelChange}
      />
    </div>
  );
}

export default CodeEditor;
