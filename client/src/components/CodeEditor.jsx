import React, { useContext } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import { ThemeContext } from '../contexts/ThemeContext';

function CodeEditor({ theme, language, code, handelChange }) {
  const { theme: darkTheme } = useContext(ThemeContext);

  loader.init().then((monaco) => {
    monaco.editor.defineTheme('dark', theme);
  });

  const width = window.innerWidth < 720 ? '12px' : '16px';

  return (
    <div className="code-editor">
      <Editor
        height="100%"
        width="100%"
        theme={darkTheme? 'dark' : 'light'}
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
