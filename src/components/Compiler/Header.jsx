import React, { useContext } from 'react';
import LanguagesDropdown from './LanguagesDropdown';
import { ThemeContext } from '../../contexts/ThemeContext';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { logout } from '../../config/firebase';

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
        <button className="dark-mode-button" onClick={toggleTheme} title="Switch theme">
          {theme ? (
            <RiSunFill style={{ fill: 'white' }} size={30} />
          ) : (
            <RiMoonFill style={{ fill: 'black' }} size={30} />
          )}
        </button>
        <LanguagesDropdown handleLanguage={handleLanguage} />
        <button
          className="dark-mode-button"
          title="Log-out"
          onClick={logout}
          style={{ marginRight: 0, marginLeft: '1rem' }}
        >
          <MdLogout style={{ fill: 'crimson' }} size={30} />
        </button>
      </div>
    </div>
  );
}

export default Header;
