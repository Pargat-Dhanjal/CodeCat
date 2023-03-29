import React from 'react'
import LanguagesDropdown from './LanguagesDropdown'

function Header({handleLanguage}) {

  return (
    <div className='header'>
      <img src="/public/logo.svg" alt="Logo" className='logo'/>
      <LanguagesDropdown handleLanguage={handleLanguage} />
    </div>
  )
}

export default Header