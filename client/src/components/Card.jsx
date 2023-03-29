import React from 'react';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import dark from '../lib/defineTheme';

function Card({
  language,
  code,
  handelChange,
  output,
  input,
  setInput,
  handelCompile,
}) {
  return (
    <div className="card">
      <CodeEditor
        theme={dark}
        language={language}
        code={code}
        handelChange={handelChange}
      />
      <Terminal
        output={output}
        input={input}
        setInput={setInput}
        handelCompile={handelCompile}
      />
    </div>
  );
}

export default Card;
