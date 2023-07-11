import { Box } from '@mui/material';
import React from 'react';
import { Editor, loader } from '@monaco-editor/react';
import { dark } from '../../constants/themeDark';

function CodeEditor() {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme('dark', dark);
  });

  const [code, setCode] = React.useState('//Write your code here...');

  // handle change
  const handelChange = (value, event) => {
    console.log(value);
    setCode(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#2B3245',
        padding: '0.7rem',
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 2,
          overflow: 'clip',
        }}
      >
        <Editor
          height="100%"
          width="100%"
          theme="dark"
          language={'java'}
          defaultValue="//Write your code here..."
          value={code}
          onChange={handelChange}
        />
      </Box>
    </Box>
  );
}

export default CodeEditor;
