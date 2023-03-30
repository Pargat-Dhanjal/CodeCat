import Compiler from './pages/Compiler';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { createContext, useState } from 'react';
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
          <Compiler />
        </div>
      </SnackbarProvider>
    </ThemeContext.Provider>
  );
}

export default App;
