import { createBrowserRouter } from 'react-router-dom';
import Compiler from '../pages/Compiler';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthChecker from '../components/AuthChecker';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthChecker />,
    children: [
      {
        path: '/',
        element: <Compiler />,
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
