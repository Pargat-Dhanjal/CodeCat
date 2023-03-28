import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { styleOptions } from '../constants/styles';
import { languageOptions } from '../constants/languages';

const LanguagesDropdown = ({handelLanguage}) => {
  const [lang, setLang] = useState(languageOptions[0]);

  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={styleOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => handelLanguage(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
