import React from 'react';
import CodeEditor from './CodeEditor'
import Terminal from './Terminal';
import dark from '../lib/defineTheme'

function Card({language}) {
  return (
    <div className="card">
      <CodeEditor theme={dark} language={language} />
      <Terminal />
    </div>
  );
}

export default Card;
