import React from 'react';
import Editor, { loader } from '@monaco-editor/react';

function CodeEditor({ theme, language, code, handelChange }) {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme('dark', theme);
  });

  const width = window.innerWidth < 720 ? '12px' : '16px';

  return (
    <div className="code-editor">
      <Editor
        height="100%"
        width="100%"
        theme="dark"
        language={language || 'java'}
        defaultValue="//Write your code here..."
        value={code}
        onChange={handelChange}
        options={{
          fontSize: [width],
        }}
      />
    </div>
  );
}

export default CodeEditor;
