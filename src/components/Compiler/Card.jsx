import React from 'react';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import dark from '../../lib/defineTheme';

function Card({
  language,
  code,
  handelChange,
  output,
  input,
  setInput,
  handelCompile,
  processing,
}) {
  return (
    <div className="card">
      <CodeEditor
        theme={dark}
        langxuage={language}
        code={code}
        handelChange={handelChange}
      />
      <Terminal
        output={output}
        input={input}
        setInput={setInput}
        handelCompile={handelCompile}
        processing={processing}
      />
    </div>
  );
}

export default Card;
