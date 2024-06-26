import React, { useContext } from 'react';
import LanguagesDropdown from './LanguagesDropdown';
import { ThemeContext } from '../../contexts/ThemeContext';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Header({ handleLanguage, language }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <Link to='/'>
        <img
          src={`/logo` + (theme ? '' : 'light') + '.svg'}
          alt="Logo"
          className="logo"
          style={{ fill: theme ? 'white' : 'black' }}
        />
      </Link>
      <div className="header-buttons">
        <button
          className="dark-mode-button"
          onClick={toggleTheme}
          title="Switch theme"
        >
          {theme ? (
            <RiSunFill style={{ fill: 'white' }} size={30} />
          ) : (
            <RiMoonFill style={{ fill: 'black' }} size={30} />
          )}
        </button>
        <LanguagesDropdown handleLanguage={handleLanguage} language={language} />
      </div>
    </div>
  );
}

export default Header;
