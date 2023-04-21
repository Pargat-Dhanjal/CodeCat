import './App.css';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import router from './config/router';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <div className={theme ? 'dark' : 'light'}>
          <RouterProvider router={router} />
        </div>
      </SnackbarProvider>
    </ThemeContext.Provider>
  );
}

export default App;
