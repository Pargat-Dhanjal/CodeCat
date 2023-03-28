import React from 'react';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import dark from '../lib/defineTheme';

function Card({ language, code, handelChange }) {
  return (
    <div className="card">
      <CodeEditor theme={dark} language={language} code={code} handelChange={handelChange} />
      <Terminal />
    </div>
  );
}

export default Card;
