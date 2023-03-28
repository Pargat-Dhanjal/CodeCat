import React from 'react'
import LanguagesDropdown from './LanguagesDropdown'

function Header({handelLanguage , handleCompile}) {

  return (
    <div className='header'>
      <button onClick={handleCompile}>Compile</button>
      <LanguagesDropdown handelLanguage={handelLanguage} />
    </div>
  )
}

export default Header