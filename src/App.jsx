import './App.css';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import router from './config/router';
import { ThemeContext } from './contexts/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme(!theme);
  }

  document.body.style.backgroundColor = theme ? '#011627' : '#e0e0e0';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <div className={theme ? 'dark' : 'light'}>
          <RouterProvider router={router} />
          <Analytics />
        </div>
      </SnackbarProvider>
    </ThemeContext.Provider>
  );
}

export default App;
