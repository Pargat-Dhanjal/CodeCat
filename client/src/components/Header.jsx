import React from 'react'

function Header() {
  return (
    <div>
        <img src="/client/public/vite.svg" alt="Logo" />
        <DarkMode />
        <LanguageButton />
    </div>
  )
}

export default Header