import React from 'react';
import { decode } from 'base-64';
import { useSnackbar } from 'notistack';

function Output({ output, handelCompile, processing }) {
  const { enqueueSnackbar } = useSnackbar();

  const getOutput = () => {
    let statusId = output?.status?.id;

    if (statusId === 6) {
      return (
        <pre style={{ color: 'red' }}>{decode(output?.compile_output)}</pre>
      );
    } else if (statusId === 3) {
      return (
        <pre style={{ color: 'lawngreen' }}>
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
        <button className="run-button" onClick={handelCompile}>
          {processing ? (
            <img src="/Loading.svg" alt="..." className="loading" />
          ) : (
            'Run'
          )}
        </button>
      </div>
      <div className="output-terminal">
        {output ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
}

export default Output;
