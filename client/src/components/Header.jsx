import React, { useContext } from 'react';
import LanguagesDropdown from './LanguagesDropdown';
import { ThemeContext } from '../contexts/ThemeContext';

function Header({ handleLanguage }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <img
        src={`/logo` + (theme ? '' : 'light') + '.svg'}
        alt="Logo"
        className="logo"
        style={{ fill: theme ? 'white' : 'black' }}
      />
      <div className="header-buttons">
        <button className="dark-mode-button" onClick={toggleTheme}>
          <img
            src={`/` + (theme ? 'dark' : 'light') + 'mode.svg'}
            alt="light/dark"
            style={{ fill: theme ? 'white' : 'black' }}
          />
        </button>
        <LanguagesDropdown handleLanguage={handleLanguage} />
      </div>
    </div>
  );
}

export default Header;
