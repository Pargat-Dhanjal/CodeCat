import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { languageOptions } from '../constants/languages';

function Compiler() {
  const [lang, setLang] = useState(languageOptions[0].value);

  function handelLanguage(l) {
    setLang(l.value);
  }

  return (
    <div className="compiler">
      <Header handelLanguage={handelLanguage} />
      <Card language={lang} />
    </div>
  );
}

export default Compiler;
