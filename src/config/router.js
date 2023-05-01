import { createBrowserRouter } from 'react-router-dom';
import Compiler from '../pages/Compiler';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthChecker from '../components/AuthChecker';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthChecker />,
    children: [
      {
        path: '/:fireId/:fileId',
        element: <Compiler />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
