import React from 'react';
import { decode } from 'base-64';

function Output({ output, handelCompile }) {
  const getOutput = () => {
    let statusId = output?.status?.id;

    if (statusId === 6) {
      return (
        <pre style={{ color: 'red' }}>{decode(output?.compile_output)}</pre>
      );
    } else if (statusId === 3) {
      return (
        <pre style={{color: 'lawngreen'}}>
          {decode(output.stdout) !== null ? `${decode(output.stdout)}` : null}
        </pre>
      );
    } else if (statusId === 5) {
      return <pre style={{ color: 'red' }}>{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre style={{ color: 'red' }}>{decode(output?.stderr)}</pre>;
    }
  };

  return (
    <div className="output">
      <div className="output-header">
        <h3 className="output-title">Output</h3>
        <button className="output-button" onClick={handelCompile}>
          Run
        </button>
      </div>
      <div className="output-terminal">
        {output ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
}

export default Output;
