import React, { useEffect, useState } from 'react';
import Header from '../components/Compiler/Header';
import Card from '../components/Compiler/Card';
import { boilerPlate } from '../constants/boilerPlate';
import { encode } from 'base-64';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const host = process.env.REACT_APP_RAPID_API_HOST;
const apiKey = process.env.REACT_APP_RAPID_API_KEY;
const url = process.env.REACT_APP_RAPID_API_URL;

function getLanguages(i) {
  let myFiles = JSON.parse(JSON.parse(localStorage.getItem('myFiles'))[i]);
  return myFiles.language;
}

function getCode(i) {
  let myFiles = JSON.parse(JSON.parse(localStorage.getItem('myFiles'))[i]);
  return myFiles.code;
}

// update myfiles in firebase firestore
async function updateMyFiles(ref, files) {
  await updateDoc(ref, {
    myFiles: files,
  });
}

function Compiler() {
  const { fileId, fireId } = useParams();
  const docRef = doc(db, 'users', fireId);
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem('myFiles'))
  );
  const [code, setCode] = useState(getCode(fileId));
  const [language, setLanguage] = useState(JSON.parse(getLanguages(fileId)));
  const [customInput, setCustomInput] = useState('');
  const [output, setOutput] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    updateMyFiles(docRef, files);
  }, [files]);

  const handelCompile = () => {
    setProcessing(true);
    // forma data for api req
    const formData = {
      language_id: language.id,
      source_code: encode(code),
      stdin: encode(customInput),
    };
    // api options
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
    // request
    axios
      .request(options)
      .then(function (response) {
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
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutput(response.data);
        checkOutput(response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      enqueueSnackbar('An error occurred', {
        variant: 'warning',
      });
      setProcessing(false);
    }
  };

  function handleLanguage(l) {
    setLanguage(l);
    let myFiles = JSON.parse(
      JSON.parse(localStorage.getItem('myFiles'))[fileId]
    );
    myFiles.language = JSON.stringify(l);
    let files = JSON.parse(localStorage.getItem('myFiles'));
    files[fileId] = JSON.stringify(myFiles);
    setFiles(files);
    localStorage.setItem('myFiles', JSON.stringify(files));
    let foundItem = boilerPlate.find((lang) => lang.name === l.value);
    if (foundItem) {
      handelCode(foundItem.value);
    }
  }

  function checkOutput(o) {
    let statusId = o.status?.id;
    if (statusId === 3) {
      enqueueSnackbar('Compiled Succesfully', {
        variant: 'success',
      });
    } else if (statusId === 5) {
      enqueueSnackbar('Time Limit Extended', {
        variant: 'warning',
      });
    } else {
      enqueueSnackbar('Error', {
        variant: 'error',
      });
    }
  }

  function handelCode(c) {
    setCode(c);
    let myFiles = JSON.parse(
      JSON.parse(localStorage.getItem('myFiles'))[fileId]
    );
    myFiles.code = c;
    let files = JSON.parse(localStorage.getItem('myFiles'));
    files[fileId] = JSON.stringify(myFiles);
    setFiles(files);
    localStorage.setItem('myFiles', JSON.stringify(files));
  }

  return (
    <div className="main-display">
      <Header handleLanguage={handleLanguage} language={language} />
      <div className="wrapper">
        <Card
          language={language.value}
          code={code}
          handelChange={handelCode}
          output={output}
          input={customInput}
          setInput={(i) => setCustomInput(i)}
          handelCompile={handelCompile}
          processing={processing}
        />
      </div>
    </div>
  );
}

export default Compiler;
