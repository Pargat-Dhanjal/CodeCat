import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { languageOptions } from '../constants/languages';
import { decode, encode } from 'base-64';
import axios from 'axios';

// env variables
const host = import.meta.env.VITE_APP_RAPID_API_HOST;
const apiKey = import.meta.env.VITE_APP_RAPID_API_KEY;
const url = import.meta.env.VITE_APP_RAPID_API_URL;

function Compiler() {
  const [code, setCode] = useState(`console.log('Hello world')`);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [customInput, setCustomInput] = useState('');
  const [output, setOutput] = useState(null);
  const [processing, setProcessing] = useState(null);

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: encode(code),
      stdin: encode(customInput),
    };

    console.log('formData', formData);
    const options = {
      method: 'POST',
      url: url,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': host,
        'X-RapidAPI-Key': apiKey,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        let status = err.response.status;
        console.log('status', status);
        if (status === 429) {
          console.log('too many requests', status);
        }
        setProcessing(false);
        console.log('catch block...', error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: url + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': host,
        'X-RapidAPI-Key': apiKey,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        console.log(`Compiled Successfully!`);
        setOutput(response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
    }
  };

  function handelLanguage(l) {
    setLanguage(l);
  }

  return (
    <div className="compiler">
      <Header handelLanguage={handelLanguage} handleCompile={handleCompile} />
      <Card
        language={language.value}
        code={code}
        handelChange={(value) => setCode(value)}
        output={output}
        input={customInput}
        setInput={(i) => setCustomInput(i)}
      />
    </div>
  );
}

export default Compiler;
