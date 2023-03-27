import React from 'react';
import CodeEditor from './CodeEditor'
import Terminal from './Terminal';
import dark from '../lib/defineTheme'

function Card() {
  return (
    <div className="card">
      <CodeEditor theme={dark} />
      <Terminal />
    </div>
  );
}

export default Card;
