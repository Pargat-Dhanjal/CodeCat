import { RouterProvider } from 'react-router-dom';
import router from './config/router';
import './index.css';
import StyleThemeProvider from './theme/ThemeProvider';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={5} preventDuplicate>
      <StyleThemeProvider>
        <RouterProvider router={router} />
      </StyleThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
