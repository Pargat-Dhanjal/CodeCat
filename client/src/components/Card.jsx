import React from 'react';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import dark from '../lib/defineTheme';

function Card({ language, code, handelChange, output }) {
  return (
    <div className="card">
      <CodeEditor theme={dark} language={language} code={code} handelChange={handelChange} />
      <Terminal output={output} />
    </div>
  );
}

export default Card;
