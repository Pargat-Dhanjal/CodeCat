import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/Compiler/Header';
import CodeEditor from '../components/Compiler/CodeEditor';
import Terminal from '../components/Compiler/Terminal';

function Compiler() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          pt: '0',
          gap: '10px',
        }}
      >
        <CodeEditor />
        <Terminal />
      </Box>
    </Box>
  );
}

export default Compiler;
