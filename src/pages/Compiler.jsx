import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/Compiler/Header';
import CodeEditor from '../components/Compiler/CodeEditor';
import Terminal from '../components/Compiler/Terminal';

function Compiler() {
  return (
    <Box>
      <Header />
      <CodeEditor />
      <Terminal />
    </Box>
  );
}

export default Compiler;
