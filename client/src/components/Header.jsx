import React from 'react'
import LanguagesDropdown from './LanguagesDropdown'

function Header({handelLanguage}) {

  return (
    <div className='header'>
      <LanguagesDropdown handelLanguage={handelLanguage} />
    </div>
  )
}

export default Header