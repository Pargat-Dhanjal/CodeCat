import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { languageOptions } from '../constants/languages';
import { decode, encode } from 'base-64';
import axios from 'axios';

function Compiler() {
  const [code, setCode] = useState(`console.log('Hello world')`);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState(null);
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
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'c7d2c615e2mshc137c8bf73401edp1ca146jsn284aa7fa4032',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: import.meta.env.REACT_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': import.meta.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
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
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', decode(response.data));
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
      showErrorToast();
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
      />
    </div>
  );
}

export default Compiler;
