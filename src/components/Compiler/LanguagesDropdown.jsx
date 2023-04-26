import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { styleOptions } from '../../constants/styles';
import { languageOptions } from '../../constants/languages';

const LanguagesDropdown = ({ handleLanguage }) => {
  return (
    <Select
      className="languages-dropdown"
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={styleOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => handleLanguage(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
